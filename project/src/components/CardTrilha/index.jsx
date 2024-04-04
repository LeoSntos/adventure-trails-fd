import * as PropTypes from "prop-types"

function CardTrilha({ dadosTrilha }) {

    return (
        <>
            <h1>{dadosTrilha.nomeTrilha}</h1>
            <span>{dadosTrilha.cidade} / {dadosTrilha.estado}</span>
            <h1>Duraçao: {dadosTrilha.duracao} Min</h1>
            <h1>Trajeto: {dadosTrilha.trajeto} Km</h1>
            <h1>{dadosTrilha.dificuldade}</h1>
            <h1>{dadosTrilha.tipoDeTrilha}</h1>
            <h1>Por: {dadosTrilha.nomeDoCriador}</h1>
            <img width={200} src={dadosTrilha.urlImgTrilha} alt="imagem trilha"></img>
        </>
    )
}

CardTrilha.propTypes = {
    dadosTrilha: PropTypes.exact({
        nomeTrilha: PropTypes.string.isRequired,
        cidade: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired,
        duracao: PropTypes.number.isRequired,
        trajeto: PropTypes.number.isRequired,
        dificuldade: PropTypes.string.isRequired,
        tipoDeTrilha: PropTypes.oneOf(['caminhada / trekking', 'ciclismo']),
        nomeDoCriador: PropTypes.string.isRequired,
        urlImgTrilha: PropTypes.string.isRequired,
    })
}

export default CardTrilha;