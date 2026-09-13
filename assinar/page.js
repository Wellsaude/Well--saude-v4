"use client"
import { useState, useEffect } from 'react'
export default function Assinar(){
  const [ref,setRef]=useState('')
  const [forma,setForma]=useState('PIX')
  const [f,setF]=useState({nome:'',cpf:'',whatsapp:'',email:''})
  const [loading,setLoading]=useState(false)
  useEffect(()=>{setRef(new URLSearchParams(window.location.search).get('ref')||'')},[])
  async function pagar(){
    setLoading(true)
    const r=await fetch('/api/checkout',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...f,afiliado_de:ref,forma_pagamento:forma})})
    const d=await r.json()
    if(d.invoiceUrl||d.url){ location.href=d.invoiceUrl||d.url }else{ alert('Erro: '+JSON.stringify(d)); setLoading(false) }
  }
  const s={width:'100%',padding:12,marginTop:8,border:'1px solid #ccc',borderRadius:8}
  return(
    <div style={{padding:20,maxWidth:420,margin:'auto',fontFamily:'sans-serif'}}>
      <h2 style={{color:'#00a859'}}>Well Saúde - R$43,50/mês</h2>
      {ref && <div style={{background:'#e8f5e9',padding:8,borderRadius:8}}>Indicado por: <b>{ref}</b> (+8,33 pts pra ele)</div>}
      <input placeholder="Nome completo" style={s} onChange={e=>setF({...f,nome:e.target.value})}/>
      <input placeholder="CPF" style={s} onChange={e=>setF({...f,cpf:e.target.value})}/>
      <input placeholder="WhatsApp" style={s} onChange={e=>setF({...f,whatsapp:e.target.value})}/>
      <input placeholder="Email" style={s} onChange={e=>setF({...f,email:e.target.value})}/>
      <div style={{display:'flex',gap:8,marginTop:12}}>
        <button onClick={()=>setForma('PIX')} style={{flex:1,padding:10,background:forma==='PIX'?'#00a859':'#999',color:'white',border:0,borderRadius:8}}>PIX</button>
        <button onClick={()=>setForma('CREDIT_CARD')} style={{flex:1,padding:10,background:forma==='CREDIT_CARD'?'#0070f3':'#999',color:'white',border:0,borderRadius:8}}>CARTÃO RECORRENTE</button>
      </div>
      <button onClick={pagar} disabled={loading} style={{width:'100%',padding:16,background:'#00a859',color:'white',border:0,borderRadius:8,marginTop:12,fontWeight:'bold'}}>{loading?'GERANDO...':'ASSINAR R$43,50 '+forma}</button>
      <p style={{fontSize:11,marginTop:12}}>Todo cliente vira afiliado: seu link será well-saude-v4.vercel.app/assinar?ref=SEU_CPF • 8,33 pts por indicação + 8,33 pts por adimplência • Pontos = catálogo + cartão Well futuro</p>
    </div>
  )
    }
