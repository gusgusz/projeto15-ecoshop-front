import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Products from "./pages/Products";
import { useState } from "react";
import { createContext } from "react";
import HomePage from "./pages/HomePage";

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
          <Route
            path="/"
            element={
              <HomePage
                cartItens={cartItens}
                setCartItens={setCartItens}
                setVisibility={setVisibility}
              />
            }
          />
          <Route
            path="/products"
            element={
              <Products cartItens={cartItens} setCartItens={setCartItens} />
            }
          />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </authContext.Provider>
    </BrowserRouter>
  );
}
