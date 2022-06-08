import React, { Fragment } from "react";
import { Classificacao } from './styles'

const CardImage = (props) => {
  return (
    <Fragment>
      <div>
        <img src={props.imgUrl} alt="" />

        <Classificacao>
          <img src={props.statusIcone} alt="" />
          <span>{props.status}</span>
        </Classificacao>
      </div>
    </Fragment>
  );
};

export default CardImage;
