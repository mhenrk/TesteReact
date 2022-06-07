import * as Styled from './styles'
import Header from '../Header/index'
import SearchBar from '../SearchBar';
import Hero from '../Hero/index'
import Creditos from '../Creditos';
import Imoveis from '../Imoveis';
import FaleConosco from '../FaleConosco';
import Footer from '../Footer';

function App() {
  return (
    <div className="App">
      <Styled.Container>
        <Header />
        <SearchBar />
        <Hero />
        <Imoveis />
        <FaleConosco />
        <Footer />
        <Creditos />
      </Styled.Container>
    </div>
  );
}

export default App;
