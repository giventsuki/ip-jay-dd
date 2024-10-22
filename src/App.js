import './App.css';
import Catalog from './Components/Catalog/Catalog';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
function App() {
  return (
    <>
      <Header />
      <Main>
        <Catalog />
      </Main>
    </>
  );
}

export default App;
