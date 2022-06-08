import React from "react";
import { CardContainer } from "./styles";

import CardImage from '../CardImage'
import CardDescription from '../CardDesciption'

const Card = (props) => {
  return (
    <CardContainer>
      <CardImage 
        imgUrl={props.image}
        status={props.status}
        statusIcone={props.icone}
      />

      <CardDescription
        titulo={props.titulo}
        localizacao={props.localizacao}
        info={props.info}
      />      
    </CardContainer>
  );
};

export default Card
