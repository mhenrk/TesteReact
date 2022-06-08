import React, { Fragment } from "react";
import { Descricao, Titulo, Subtitulo, Btn } from "./styles";

import dados from '../../../assets/img/imoveis/dados.png'
import localizacao from '../../../assets/img/imoveis/locationpin.png'

const CardDescription = (props) => {
  return (
    <Fragment>
      <Descricao>
        <Titulo>{props.titulo}</Titulo>
        <Subtitulo>
          <img src={localizacao} alt="" />{props.localizacao}
        </Subtitulo>
        <Subtitulo>
          <img src={dados} alt="" />
          {props.info}
        </Subtitulo>
        <Btn>mais detalhes</Btn>
      </Descricao>
    </Fragment>
  );
};

export default CardDescription;
