"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
function Conteudo(){
const s=useSearchParams();
const ref=s.get("ref")||"WILSONADM";
return(
<div style={{padding:20,textAlign:"center",fontFamily:"Arial",maxWidth:400,margin:"0 auto"}}>
<h2>Well Saude 24h - Checkout</h2>
<p>Plano R$43,50/mes</p>
<div style={{background:"#e8f5e9",padding:12,borderRadius:8}}>Patrocinador: <b>{ref}</b><br/>Cashback: 8,33 pts = R$5</div>
<input placeholder="Nome completo" style={{width:"100%",padding:12,marginTop:10}}/>
<input placeholder="CPF" style={{width:"100%",padding:12,marginTop:10}}/>
<input placeholder="WhatsApp" style={{width:"100%",padding:12,marginTop:10}}/>
<a href={`https://wa.me/5571999999999?text=Quero assinar Well Saude 24h ref ${ref}`} style={{display:"block",background:"green",color:"white",padding:15,borderRadius:8,marginTop:15,textDecoration:"none",fontWeight:"bold"}}>PAGAR R$43,50</a>
</div>
);
}
export default function P(){return <Suspense><Conteudo/></Suspense>;}
