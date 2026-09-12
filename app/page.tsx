export default function Home({ searchParams }: any) {
  const ref = searchParams?.ref || "SEM-REF";
  return (
    <div style={{padding: 20, fontFamily: "Arial"}}>
      <h1>Well Saude - Bem Cuidar V4</h1>
      <h2>Seu link: ?ref={ref}</h2>
      <p>Este patrocinador ganha 8.33 pontos = R$5,00</p>
      <a href={`/assinar?ref=${ref}`} style={{background: "green", color: "white", padding: 15, display: "block", textAlign: "center", textDecoration: "none"}}>
        ASSINAR AGORA
      </a>
      <p style={{marginTop: 40}}>ID: WILSONADM - Seu link funciona!</p>
    </div>
  )
}
