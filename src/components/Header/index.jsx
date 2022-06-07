import { Container, MenuContainer, FlexItem } from "./styles"
import logo from '../../assets/img/header/logo-franco.png'
import search from '../../assets/img/header/searcheader.png'
import menu from '../../assets/img/header/hamb.png'

export default function Header() {
    return (
        <Container>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <MenuContainer>
                <FlexItem>
                    <img src={search} alt="search" />
                    <h5>Buscar Lançamentos</h5>
                </FlexItem>
                <FlexItem>
                    <h5>Menu</h5>
                    <img src={menu} alt="menu" />
                </FlexItem>
            </MenuContainer>
        </Container>
    )
}