import { Container, TextDiv, Titulo, Subtitulo, SaibaMais, Span, BtnText} from "./styles"

export default function Hero() {
    return (
        <Container>
            <TextDiv>
                <Titulo>Novo conceito de inteligência desbloqueado.</Titulo>
                <Subtitulo>Apartamentos de 63,33m2</Subtitulo>
                <SaibaMais>
                    <Span>+</Span>
                    <BtnText>saiba mais</BtnText>
                </SaibaMais>
            </TextDiv>
        </Container>
    )
}