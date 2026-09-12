export default function Assinar({ searchParams }: any) {
  const ref = searchParams?.ref || 'WILSONADM'
  return (
    <div style={{padding:20, fontFamily:'Arial', textAlign:'center'}}>
      <h1>Assinatura Well Saúde - R$60</h1>
      <p>Indicado por: <b>{ref}</b></p>
      <h2 style={{color:'green'}}>{ref} ganha 8,33 pts = R$5,00</h2>
      <a href="/" style={{background:'#25D366', color:'white', padding:'15px 30px', display:'inline-block', marginTop:20, textDecoration:'none', borderRadius:8}}>PAGAR COM PIX</a>
    </div>
  )
}
