import * as PropTypes from "prop-types"
import { FaRegHeart } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
import "./style.css"

function CardTrilha({ dadosTrilha }){

    return (
        <div className="card-container">
            <img className="card-imagem" width={200} src={dadosTrilha.urlImgTrilha} alt="imagem trilha"></img>
            <div className="card-content">
            <h5 className="card-titulo">{dadosTrilha.nomeTrilha} - {dadosTrilha.cidade} / {dadosTrilha.estado}<FaRegHeart className="coracao-favorito"/></h5>
            <p>Por: {dadosTrilha.nomeDoCriador}</p>
            <p>Duraçao: {dadosTrilha.duracao} Min</p>
            <p>Trajeto: {dadosTrilha.trajeto} Km</p>
            <p>{dadosTrilha.dificuldade}</p>
            <p>{dadosTrilha.tipoDeTrilha}</p>
            <span><IoStarOutline/><IoStarOutline/><IoStarOutline/><IoStarOutline/><IoStarOutline/> <a className="texto-avaliacao">Avaliações</a></span>
            </div>
        </div>
    )
}

CardTrilha.propTypes = {
    dadosTrilha: PropTypes.exact({
        nomeTrilha: PropTypes.string.isRequired,
        nomeDoCriador: PropTypes.string.isRequired,
        duracao: PropTypes.number.isRequired,
        trajeto: PropTypes.number.isRequired,
        dificuldade: PropTypes.string.isRequired,
        cidade: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        tipoDeTrilha: PropTypes.oneOf(['caminhada / trekking', 'ciclismo']),
        urlImgTrilha: PropTypes.string.isRequired,
    })
}

export default CardTrilha;