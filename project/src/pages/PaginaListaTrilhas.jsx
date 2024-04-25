import CardTrilha from "../components/CardTrilha";
import { useContext } from "react";
import { TrilhasContext } from "../context/TrilhasContext";

function PaginaListaTrilhas() {
    const { trilhas, loading } = useContext(TrilhasContext)

    return (
        <div className="containerIndex">
            <div className="container">
                <h1>Explore trilhas incríveis</h1>

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

            </div>
        </div>
    )
}

export default PaginaListaTrilhas