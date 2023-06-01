import logo from "./logo.svg";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./component/footer";
import Header from "./component/header";
import HomeScreens from "./screens/HomeScreens";
function App() {
  return (
    <>
    <Header/>
      <main>
        <Container>
          <h1>Ecommerce App</h1>
          <HomeScreens/>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
