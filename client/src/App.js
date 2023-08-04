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
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
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
              <Route path="/profile" element={<ProfileScreen/>} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart/:id?" element={<CartScreen/>} />
              <Route path="/register" element={<RegisterScreen/>} />
              <Route path="/shipping" element={<ShippingScreen/>} />
              <Route path="/payment" element={<PaymentScreen/>} />
              <Route path="/placeorder" element={<PlaceOrderScreen/>} />
              <Route path="/order/:id" element={<OrderScreen/>} />
            </Routes>
          </Container>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
