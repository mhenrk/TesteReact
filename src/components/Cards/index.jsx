import {Fragment, useState, useEffect } from "react";
import Card from "./Card";

async function getImoveis() {
    const response = await fetch(`http://localhost:3000/api/imoveis.json`);
    const data = await response.json();
    return data;
}

 const Cards = () => {

    const [card, setCard] = useState([])

    useEffect(() => {
        getImoveis()
        .then((data) => {
            setCard(data['imoveis'])
          })
    }, [])

    return (
        <Fragment>
            {card.map((card, index) =>
                <Card
                    id={card.id}
                    image={card.cardImage}
                    status={card.cardStatus}
                    titulo={card.cardTitle}
                    localizacao={card.cardLocation}
                    info={card.cardInfo}
                    icone={card.cardIcon}
                    key={index}
                />
            )}
        </Fragment>
    )
}

export default Cards