import HeaderTrilha from "./components/HeaderTrilha";
import Footertrilha from "./components/FooterTrilha";
import { Outlet } from "react-router-dom";
import {TrilhasContextProvide} from "./context/TrilhasContext"
import "./App.css"

function App() {

  return (
    <TrilhasContextProvide>
      <HeaderTrilha />
      <Outlet />
      <Footertrilha />
    </TrilhasContextProvide>
  )
}

export default App



