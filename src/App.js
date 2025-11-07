import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
