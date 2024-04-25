import "./style.css"
import { Link } from "react-router-dom"

function HeaderTrilha() {

    return (
        <div className="header-container">
            <div className="header-titulo">
                <Link to="/" id="titulo"><h1>Adventure Trails FD</h1></Link>
            </div>

            <div className="ancora-group">
                <Link to="/lista-trilha" id="primeira-ancora">Explorar Trilhas</Link>
                <Link to="/cadastro-trilha" id="segunda-ancora">Cadastrar Trilhas</Link>
            </div>
        </div>
    )
}

export default HeaderTrilha;