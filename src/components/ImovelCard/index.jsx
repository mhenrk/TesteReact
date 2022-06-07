import { Card, Classificacao, Btn, Descricao, Titulo, Subtitulo } from "./styles"


import location from '../../assets/img/imoveis/map-pin.png'
import dados from '../../assets/img/imoveis/noun-apartment-32818361.png'

export default function Cards(props) {
    return (
        <Card>
            <div className="imagem">
                <img className="imovel" src={props.img} alt="" />

                <Classificacao>
                    <img src={props.statusIcon} alt="" />
                    <span>{props.status}</span>
                </Classificacao>
            </div>

            <Descricao>
                <Titulo>{props.residencial}</Titulo>
                <Subtitulo>
                    <img src={location} alt="" />
                    {props.localizacao}
                </Subtitulo>
                <Subtitulo>
                    <img src={dados} alt="" />
                    {props.tamanho}
                </Subtitulo>
                <Btn>mais detalhes</Btn>
            </Descricao>
        </Card>
    )
}


