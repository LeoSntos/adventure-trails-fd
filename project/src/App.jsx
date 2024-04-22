import CardTrilha from "./components/CardTrilha"
import useFetch from "./hooks/useFetch";
import HeaderTrilha from "./components/HeaderTrilha";
import { Outlet } from "react-router-dom";
import "./App.css"

function App() {


  return (
    <>
      <HeaderTrilha />

      <Outlet />

      <footer />

    </>
  )
}

export default App

// const [trilhas, loading] = useFetch("./public/trilhas.json")

{/* <div className="container">
<h1 className="titulo">Explore trilhas incríveis</h1>

{loading && <h4>carregando trilhas</h4>}
{!loading && trilhas !== null && (
  <>
    {trilhas.map((trilha, index) =>
      <CardTrilha
        dadosTrilha={trilha}
        key={index}
      />
    )}
  </>
)}

</div> */}