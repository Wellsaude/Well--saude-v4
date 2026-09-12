export default function Home({ searchParams }) {
  const ref = searchParams?.ref || "SEM-REF";
  return (
    <div style={{padding: 20, fontFamily: "Arial"}}>
      <h1>Well Saude - V4</h1>
      <h2>Link: ?ref={ref}</h2>
      <p>Patrocinador: R$5,00 (8.33 pontos)</p>
      <a href={`/assinar?ref=${ref}`} style={{background: "green", color: "white", padding: 15, display: "block", textAlign: "center", textDecoration: "none", marginTop: 20}}>
        ASSINAR AGORA
      </a>
      <p style={{marginTop: 30}}>ID: WILSONADM</p>
    </div>
  )
}
