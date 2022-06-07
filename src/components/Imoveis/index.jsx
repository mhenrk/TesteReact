import { Container, Btn } from "./styles";
import Cards from "../ImovelCard";

import card01 from "../../assets/img/imoveis/c01.png";
import card02 from "../../assets/img/imoveis/c02.png";
import card03 from "../../assets/img/imoveis/c03.png";

import emObra from "../../assets/img/imoveis/em-obra.png";
import pronto from "../../assets/img/imoveis/pronto.png";
import lancamento from "../../assets/img/imoveis/pre-lancamento.png";

export default function Imoveis(props) {
  return (
    <Container>
      <Cards
        status="Em Obra"
        img={card02}
        statusIcon={pronto}
        residencial="Duomo Residencial"
        localizacao="Ubatuba, a Praia Grande"
        tamanho="2 ou 3 (1 a 3 suítes) 92m² ou 201m²"
      />
      <Cards
        status="Pré-Lançamento"
        img={card01}
        statusIcon={emObra}
        residencial="Duomo Residencial"
        localizacao="Ubatuba, a Praia Grande"
        tamanho="2 ou 3 (1 a 3 suítes) 92m² ou 201m²"
      />
      <Cards
        status="Pronto"
        img={card03}
        statusIcon={lancamento}
        residencial="Duomo Residencial"
        localizacao="Ubatuba, a Praia Grande"
        tamanho="2 ou 3 (1 a 3 suítes) 92m² ou 201m²"
      />
      <Cards
        status="Pronto"
        img={card03}
        statusIcon={pronto}
        residencial="Duomo Residencial"
        localizacao="Ubatuba, a Praia Grande"
        tamanho="2 ou 3 (1 a 3 suítes) 92m² ou 201m²"
      />
      <Cards
        status="Em Obra"
        img={card02}
        statusIcon={emObra}
        residencial="Duomo Residencial"
        localizacao="Ubatuba, a Praia Grande"
        tamanho="2 ou 3 (1 a 3 suítes) 92m² ou 201m²"
      />
      <Cards
        status="Pré-Lançamento"
        img={card01}
        statusIcon={emObra}
        residencial="Duomo Residencial"
        localizacao="Ubatuba, a Praia Grande"
        tamanho="2 ou 3 (1 a 3 suítes) 92m² ou 201m²"
      />
      <Cards
        status="Pronto"
        img={card02}
        statusIcon={lancamento}
        residencial="Duomo Residencial"
        localizacao="Ubatuba, a Praia Grande"
        tamanho="2 ou 3 (1 a 3 suítes) 92m² ou 201m²"
      />
      <Cards
        status="Pré-Lançamento"
        img={card03}
        statusIcon={lancamento}
        residencial="Duomo Residencial"
        localizacao="Ubatuba, a Praia Grande"
        tamanho="2 ou 3 (1 a 3 suítes) 92m² ou 201m²"
      />
      <Cards
        status="Pronto"
        img={card01}
        statusIcon={emObra}
        residencial="Duomo Residencial"
        localizacao="Ubatuba, a Praia Grande"
        tamanho="2 ou 3 (1 a 3 suítes) 92m² ou 201m²"
      />

      <Btn>ver todos os Lançamentos</Btn>
    </Container>
  );
}
