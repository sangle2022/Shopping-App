import logo from "./logo.svg";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./component/footer";
import Header from "./component/header";
import HomeScreens from "./screens/HomeScreens";
import CartScreen from "./screens/CartScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./screens/productDetails";
import LoginScreen from "./screens/LoginScreen";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="my-3">
          <Container>
            
            <Routes>
              <Route path="/" element={<HomeScreens />} />
              <Route path="/login" element={<LoginScreen/>} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart/:id?" element={<CartScreen/>} />
            </Routes>
          </Container>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
