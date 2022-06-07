import { Container, Informativo, Titulo, Subtitulo, Contato, Button } from "./styles"
import consultor from '../../assets/img/corretor/falar-consultor.png'
import contato from '../../assets/img/corretor/contato-corretor-whats.png'

export default function FaleConosco(){
    return (
        <Container>
            <Informativo>
                <Titulo>Fale com um corretor</Titulo>
                <Subtitulo>Encontre um imóvel sob medida para sua necessidade e da sua família.</Subtitulo>
                <Contato>
                    <Button>
                        <img src={contato} alt="" />
                        falar com um corretor
                    </Button>
                </Contato>
            </Informativo>

            <img class="consultor" src={consultor} alt="consultor" />
        </Container>
                
    )
}