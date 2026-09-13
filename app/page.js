"use client";
import { useSearchParams } from "next/navigation";
export default function Home(){
const sp=useSearchParams();
const ref=sp.get("ref")||"WILSONADM";
return(
<div style={{padding:20,textAlign:"center",fontFamily:"Arial"}}>
<h1>Well Saude V4 - R$43,50</h1>
<p style={{color:"green",fontWeight:"bold"}}>8,33 pts = R$5 cashback em pontos</p>
<div style={{background:"#f0fff0",padding:15,borderRadius:10,textAlign:"left"}}>
<b>Voce ganha pontos que pode usar como cashback para:</b>
<p>1- Pagar ou descontar sua mensalidade</p>
<p>2- Comprar no catalogo</p>
<p>3- Acumular para limite no futuro cartao Well Saude</p>
<hr/>
<p>2o mes em dia: 8,33 pts = R$5</p>
<p>Indicacao paga: 8,33 pts = R$5</p>
<p>Ate 3d atraso: 4 pts = R$2,40</p>
</div>
<p>Patrocinador: {ref}</p>
<a href={"/assinar?ref="+ref} style={{background:"green",color:"white",padding:15,borderRadius:8,display:"inline-block",marginTop:15,textDecoration:"none"}}>ASSINAR R$43,50</a>
</div>
);
}
