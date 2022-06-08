import {
  Container,
  Label,
  SelectGroup,
  Select,
  MenuContainer,
  BtnGroup,
} from "./styles";

import searcheader from "../../assets/img/header/searcheader.png";

const SearchBar = () => {
  return (
    <Container>
      <SelectGroup>
        <Label />Cidade
        <Select>
          <option value="">Todas</option>
          <option value="">Ubatuba</option>
          <option value="">Florianopolis</option>
        </Select>
      </SelectGroup>
      <SelectGroup>
        <Label />
        Empreendimento
        <Select>
          <option value="">Todas</option>
          <option value="">Florianopolis</option>
          <option value="">Acre</option>
        </Select>
      </SelectGroup>
      <SelectGroup>
        <Label />
        Tipo
        <Select>
          <option value="">Todas</option>
          <option value="">Casa</option>
          <option value="">Apartamento</option>
        </Select>
      </SelectGroup>
      <SelectGroup>
        <Label />
        Nº Dormitórios
        <Select>
          <option value="">Todas</option>
          <option value="">1 Dorm</option>
          <option value="">2 Dorm</option>
        </Select>
      </SelectGroup>
      <SelectGroup>
        <Label />
        Estágio da Obra
        <Select>
          <option value="">Todas</option>
          <option value="">Pronto para morar</option>
          <option value="">Em Obra</option>
        </Select>
      </SelectGroup>

      <MenuContainer>
        <BtnGroup>
          <img src={searcheader} alt="" />
          <h5>Buscar</h5>
        </BtnGroup>
        <BtnGroup>
          <span>X</span>
        </BtnGroup>
      </MenuContainer>
    </Container>
  );
};

export default SearchBar;
