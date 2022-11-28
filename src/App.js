import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Products from "./pages/Products";
import { useState } from "react";
import { createContext } from "react";
import PaymentCheck from "./pages/PaymentCheck";

export const authContext = createContext();
export default function App() {
  const [auth, setAuth] = useState(null);

  return (
    <BrowserRouter>
      <authContext.Provider value={{ auth, setAuth }}>
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/payment" element={<PaymentCheck />} />
        </Routes>
      </authContext.Provider>
    </BrowserRouter>
  );
}
