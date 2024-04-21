import {createBrowserRouter} from "react-router-dom"

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