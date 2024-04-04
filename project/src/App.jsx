import CardTrilha from "./components/CardTrilha"

function App() {

  const listaDeTrilhas = [
    {
      nomeTrilha: "Trilha da Costa da Lagoa",
      cidade: "Florianópolis",
      estado: "SC",
      duracao:  120,
      trajeto: 4,
      dificuldade:  "iniciante!",
      tipoDeTrilha: "caminhada / trekking",
      nomeDoCriador: "Leonardo Brognoli",
      urlImgTrilha: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }
  ]

  return (
    <>
    {
      listaDeTrilhas.map((trilha, index) => (
      <CardTrilha dadosTrilha={trilha} key={index}/>
      ))
    }
    </>
  )
}

export default App;