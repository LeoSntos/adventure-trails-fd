import styles from "./PaginaInicial.module.css"
import { Button } from "@mui/material"
import { createTheme } from '@mui/material/styles';

function PaginaInicial() {

    return (
        <>
            <div className={styles.body}>
                <div className={styles.container}>
                    <h1 className={styles.clWhite}>Que tal aproveitar um tempo <br /> com a natureza?</h1>
                    <p className={styles.clWhite}>Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas <br /> aventuras e inspire-se com as experiências de outros aventureiros. <br /> Prepare-se para explorar novos horizontes e se conectar com a natureza <br /> através do Adventure Trails!</p>
                    <Button variant="contained">Explorar trilhas</Button>
                </div>

                <div className={styles.bodyBotton}>
                    <div className={styles.group}>
                        <h1 className={styles.title}>Explore trilhas incríveis</h1>

                        <p>O "Adventure Trails FD" é seu portal para explorar e compartilhar as melhores trilhas para trekking e ciclismo ao redor do mundo. <br /> Descubra rotas deslumbrantes, desde caminhos tranquilos por florestas exuberantes até trilhas desafiadoras em montanhas <br /> majestosas. Encontre informações detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de interesse naturais e <br /> dicas úteis para uma experiência eco-friendly.</p>

                        <Button variant="contained">Explorar trilhas</Button>

                        <div className={styles.cadastrarNovaTrilha}>
                            <div className={styles.h2EndButton}>
                                <h2>Compartilhe fotos, <br /> dicas e localização das <br /> suas trilhas favoritas</h2>
                                <Button variant="contained">Cadastrar nova trilha</Button>
                            </div>


                            <img id={styles.imgEstrada} src="https://s3-alpha-sig.figma.com/img/749a/d3cd/b59b552226c32b61fb8ba0ba617adccb?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N6icT8e0-GklSnUVCrkiTlHY9VSqj7uqYKxrJCrjT1kJo20aDiz3tSw~m2B9Pni5oFSDALY88iya~-XiJ6tW0svexricaSN77CbODZurlU4Mcnl~M2-DfWiYwpuPZdJKwbMkeYQwDutpMB3VV2AA~MBwUh73nkbRIbFtN~ADMhsp2LXetZqaw-ZROaoVNMbvVKPFydQyNkBR7KrFbtJyjnvDdE11D89KOy6CAfP6TA3S0tra1AQ0imJA29oDMMmasdMfjFQ-~L24vmCjO6PZl1-xUpJB0mmwr6pp~qLz4X~lGaI7oJBYYTBeYZfSB3GaeuC3PpFO5EXWS6uyfsSrMA__" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default PaginaInicial