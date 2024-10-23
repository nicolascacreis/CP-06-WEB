import Header from '../component/Header'
import Pesquisa from '../component/Pesquisa'
import UltimosLancamentos from '../component/UltimosLancamentos'
import AppContainer from '../component/AppContainer'

const Home = () => {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home