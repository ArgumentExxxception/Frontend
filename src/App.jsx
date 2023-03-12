import Header from "./components/header/Header"
import styled from "styled-components";
import Footer from "./components/footer/Footer";

const Main = styled.div`
  height:3000px;
  display: flex;
  justify-content:center;
  align-items:center;`

const MainBlock = styled.div`
  background-color:black;
  height: 1000px;
  width: 1000px;
`

const App = () => {
  return (
    <div>
      <Header />
      {/* Чтобы было видно, что прокрутка вниз работает и Header зафиксирован */}
      <Main>  
        <MainBlock></MainBlock>
      </Main>
      <Footer/>
    </div>
  );
}

export default App;
