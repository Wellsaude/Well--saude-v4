"use client"
import { useState,useEffect } from 'react'
export default function Assinar(){
const [ref,setRef]=useState('')
const [forma,setForma]=useState('PIX')
const [f,setF]=useState({nome:'',cpf:'',whatsapp:'',email:''})
useEffect(()=>{setRef(new URLSearchParams(location.search).get('ref')||'')},[])
async function pagar(){
const r=await fetch('/api/checkout',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...f,afiliado_de:ref,forma_pagamento:forma})})
const d=await r.json()
if(d.invoiceUrl) location.href=d.invoiceUrl
else alert(JSON.stringify(d))
}
const s={width:'100%',padding:12,marginTop:8,borderRadius:8,border:'1px solid #ccc'}
return(
<div style={{padding:24,maxWidth:420,margin:'auto'}}>
<h2 style={{color:'#00a859'}}>Well Saude R$43,50/mes</h2>
{ref&&<div>Indicado por: <b>{ref}</b></div>}
<input style={s} placeholder="Nome" onChange={e=>setF({...f,nome:e.target.value})}/>
<input style={s} placeholder="CPF" onChange={e=>setF({...f,cpf:e.target.value})}/>
<input style={s} placeholder="WhatsApp" onChange={e=>setF({...f,whatsapp:e.target.value})}/>
<input style={s} placeholder="Email" onChange={e=>setF({...f,email:e.target.value})}/>
<button onClick={()=>setForma('PIX')} style={{padding:10,background:forma==='PIX'?'green':'gray',color:'#fff'}}>PIX</button>
<button onClick={()=>setForma('CREDIT_CARD')} style={{padding:10,background:forma==='CREDIT_CARD'?'blue':'gray',color:'#fff'}}>CARTAO</button>
<button onClick={pagar} style={{width:'100%',padding:16,background:'#00a859',color:'#fff',marginTop:10}}>ASSINAR {forma}</button>
</div>
)
  }
