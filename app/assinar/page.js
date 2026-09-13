export default function Assinar({ searchParams }) {
  const ref = searchParams?.ref || "SEM-REF";
  return (
    <div style={{padding: 20, fontFamily: "Arial"}}>
      <h1>Assinar Well Saude V4</h1>
      <h2>Patrocinador: {ref}</h2>
      <p>Ele ganha 8.33 pontos = R$5,00</p>
      <p>ID: WILSONADM - Link OK!</p>
      <a href={`/?ref=${ref}`} style={{background: "green", color: "white", padding: 15, display: "block", textAlign: "center", textDecoration: "none", marginTop: 20}}>VOLTAR</a>
    </div>
  )
                                      }
