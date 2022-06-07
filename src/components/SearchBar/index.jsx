import {
  Container,
  Label,
  SelectGroup,
  Select,
  MenuContainer,
  BtnGroup,
} from "./styles";
import searcheader from '../../assets/img/header/searcheader.png'

export default function SearchBar() {
  return (
    <Container>
      <SelectGroup>
        <Label />
        Estágio da Obra
        <Select>
          <option value="">Marilia</option>
          <option value="">Florianopolis</option>
          <option value="">Acre</option>
        </Select>
      </SelectGroup>
      <SelectGroup>
        <Label />
        Estágio da Obra
        <Select>
          <option value="">Marilia</option>
          <option value="">Florianopolis</option>
          <option value="">Acre</option>
        </Select>
      </SelectGroup>
      <SelectGroup>
        <Label />
        Estágio da Obra
        <Select>
          <option value="">Marilia</option>
          <option value="">Florianopolis</option>
          <option value="">Acre</option>
        </Select>
      </SelectGroup>
      <SelectGroup>
        <Label />
        Estágio da Obra
        <Select>
          <option value="">Marilia</option>
          <option value="">Florianopolis</option>
          <option value="">Acre</option>
        </Select>
      </SelectGroup>
      <SelectGroup>
        <Label />
        Estágio da Obra
        <Select>
          <option value="">Marilia</option>
          <option value="">Florianopolis</option>
          <option value="">Acre</option>
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
}
