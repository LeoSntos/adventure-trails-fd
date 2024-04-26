import HeaderTrilha from "./components/HeaderTrilha";
import Footertrilha from "./components/FooterTrilha";
import { Outlet } from "react-router-dom";
import {TrilhasContextProvider} from "./context/TrilhasContext"
import "./App.css"

function App() {

  return (
    <TrilhasContextProvider>
      <HeaderTrilha />
      <Outlet />
      <Footertrilha />
    </TrilhasContextProvider>
  )
}

export default App



