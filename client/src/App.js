import logo from "./logo.svg";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./component/footer";
import Header from "./component/header";
import HomeScreens from "./screens/HomeScreens";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./screens/productDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="my-3">
          <Container>
            
            <Routes>
              <Route path="/" element={<HomeScreens />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </Container>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
