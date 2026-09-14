"use client"
import { useState, useEffect } from 'react'
export default function Assinar(){
  const [ref,setRef]=useState('')
  const [forma,setForma]=useState('PIX')
  const [f,setF]=useState({nome:'',cpf:'',whatsapp:'',email:''})
  useEffect(()=>{setRef(new URLSearchParams(window.location.search).get('ref')||'')},[])
  async function pagar(){
    const r=await fetch('/api/checkout',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...f,afiliado_de:ref,forma_pagamento:forma})})
    const d=await r.json()
    if(d.invoiceUrl) location.href=d.invoiceUrl
    else alert(JSON.stringify(d))
  }
  const s={width:'100%',padding:12,marginTop:8,borderRadius:8,border:'1px solid #ccc'}
  return(
    <div style={{padding:24,maxWidth:420,margin:'auto',fontFamily:'sans-serif'}}>
      <h2 style={{color:'#00a859'}}>Well Saude R$43,50/mes</h2>
      {ref && <div style={{background:'#e6f7ed',padding:8,borderRadius:8}}>Indicado por: <b>{ref}</b></div>}
      <input style={s} placeholder="Nome completo" onChange={e=>setF({...f,nome:e.target.value})}/>
      <input style={s} placeholder="CPF" onChange={e=>setF({...f,cpf:e.target.value})}/>
      <input style={s} placeholder="WhatsApp" onChange={e=>setF({...f,whatsapp:e.target.value})}/>
      <input style={s} placeholder="Email" onChange={e=>setF({...f,email:e.target.value})}/>
      <div style={{display:'flex',gap:8,marginTop:12}}>
        <button onClick={()=>setForma('PIX')} style={{flex:1,padding:12,background:forma==='PIX'?'#00a859':'#ccc',color:'#fff',border:0,borderRadius:8}}>PIX</button>
        <button onClick={()=>setForma('CREDIT_CARD')} style={{flex:1,padding:12,background:forma==='CREDIT_CARD'?'#0066ff':'#ccc',color:'#fff',border:0,borderRadius:8}}>CARTAO</button>
      </div>
      <button onClick={pagar} style={{width:'100%',marginTop:16,padding:16,background:'#00a859',color:'#fff',border:0,borderRadius:8,fontWeight:'bold'}}>ASSINAR R$43,50 via {forma}</button>
      <p style={{fontSize:11,marginTop:12}}>Todo cliente vira afiliado ?ref=SEUCODIGO + 8,33 pts</p>
    </div>
  )
        }
