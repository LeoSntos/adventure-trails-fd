import {createBrowserRouter} from "react-router-dom"
import PaginaInicial from "../pages/PaginaInicial"
import PaginaCadastroTrilha from "../pages/PaginaCadastroTrilha"
import PaginaListaTrilhas from "../pages/PaginaListaTrilhas"

const routers = createBrowserRouter([
    {
        path: "/",
        element: <PaginaInicial />
    },
    {
        path: "/cadastro-trilha",
        element: <PaginaCadastroTrilha />
    },
    {
        path: "/lista-trilha",
        element: <PaginaListaTrilhas />
    },
])

export default routers