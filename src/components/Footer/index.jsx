import { Container, List } from "./styles";
import logo from "../../assets/img/logo-franco.png";
import award from "../../assets/img/footer/award.png";
import filetext from "../../assets/img/footer/file-text.png";
import search from "../../assets/img/footer/search.png";
import home from "../../assets/img/footer/home.png";
import mail from "../../assets/img/footer/mail.png";
import phonecall from "../../assets/img/footer/phone-call.png";
import pocket from "../../assets/img/footer/pocket.png";
import point from "../../assets/img/footer/point.png";
import whatsapp from "../../assets/img/footer/whatsapp.png";

import facebook from "../../assets/img/footer/facebook.png";
import instagram from "../../assets/img/footer/instagram.png";
import youtube from "../../assets/img/footer/youtube.png";

export default function Footer() {
  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        <ul>
          <List>
            <img className="icones" src={home} alt="home" />
            Home
          </List>
          <List>
            <img className="icones" src={award} alt="quem-e-a-franco" />
            Quem é a Franco
          </List>
          <List>
            <img className="icones" src={search} alt="buscar-lançamentos" />
            Buscar Lançamentos
          </List>
          <List>
            <img className="icones" src={filetext} alt="blog" />
            Blog
          </List>
          <List>
            <img className="icones" src={phonecall} alt="contato" />
            Contato
          </List>
          <List>
            <img className="icones" src={pocket} alt="poListticas" />
            Políticas
          </List>
        </ul>
      </div>
      <div className="contato">
        <ul>
          <List>
            <img className="icones" src={point} alt="home" />
            Rua Ubatuba, 154 Jardim das Nações - Taubaté/SP
          </List>
          <List>
            <img className="icones" src={mail} alt="home" />
            contato@francoimoveis.net
          </List>
          <List>
            <img className="icones" src={whatsapp} alt="home" />
            (12) 99622-9463 / 3633-8556
          </List>
        </ul>
      </div>
      <div className="social">
        <p>Siga-nos nas redes sociais:</p>
        <div className="icones">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={youtube} alt="youtube" />
        </div>
      </div>
    </Container>
  );
}
