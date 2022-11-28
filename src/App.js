import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import HomePage from "./pages/HomePage";
import PaymentCheck from "./pages/PaymentCheck";
import { useState } from "react";
import { createContext } from "react";

export const authContext = createContext();
export default function App() {
  const [auth, setAuth] = useState(null);
  const [visibility, setVisibility] = useState("hidden");
  const [cartItens, setCartItens] = useState(
    () => JSON.parse(localStorage.getItem("cart")) ?? []
  );

  return (
    <BrowserRouter>
      <authContext.Provider
        value={{
          auth,
          setAuth,
          visibility,
          setVisibility,
          cartItens,
          setCartItens,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/payment" element={<PaymentCheck />} />
        </Routes>
      </authContext.Provider>
    </BrowserRouter>
  );
}
