import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/form" element={<Form />} /> */}
        {/* <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route
          path="/login"
          element={false ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/register"
          element={false ? <Navigate to={"/"} /> : <Register />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
