export default function Home({ searchParams }: any) {
  const ref = searchParams?.ref || 'SEM-REF'
  return (
    <div style={{padding:20, fontFamily:'Arial', textAlign:'center'}}>
      <h1>Well Saúde Bem Cuidar - V4</h1>
      <h2>Seu link é: ?ref={ref}</h2>
      <p>Este patrocinador ganha 8.33 pontos = R$5,00</p>
      <a href={`/assinar?ref=${ref}`} style={{background:'green', color:'white', padding:'15px 30px', display:'inline-block', marginTop:20, textDecoration:'none', borderRadius:8}}>ASSINAR AGORA</a>
      <p style={{marginTop:40}}>Seu ID WILSONADM está configurado como ADMIN</p>
    </div>
  )
}
