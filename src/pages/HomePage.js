import styled from "styled-components";
import { useEffect, useState } from "react";
import Url from "../services/Api.js";
import axios from "axios";
import { authContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function HomePage() {
  const { cartItens } = useContext(authContext);
  const { setCartItens } = useContext(authContext);
  const [listProducts, setListProducts] = useState([]);
  const { setVisibility } = useContext(authContext);

  function handleMenu() {
    setVisibility("visible");
  }

  useEffect(() => {
    const promise = axios.get(`${Url}/products`);

    promise.then((res) => {
      console.log(res.data.products);
      setListProducts(res.data.products);
    });

    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  return (
    <Content>
      <header>
        <div className="logo">
          <Eco>ECO</Eco>
          <Shop>SHOP</Shop>
        </div>

        <div className="right">
          <Link to="/payment">
            <div className="cart">
              <ion-icon name="cart-outline"></ion-icon>{" "}
              <p>{cartItens.length > 0 ? cartItens.length : ""}</p>
            </div>
          </Link>
          <div className="menu">
            <ion-icon onClick={handleMenu} name="menu-outline"></ion-icon>
          </div>
        </div>
      </header>
      <ListContainer>
        {listProducts.map((p) => (
          <div key={p._id}>
            <img src={p.img} alt="imagem" />
            <span> {p.describe}</span>
            <p>R$ {p.price}</p>
            <button
              onClick={() => {
                setCartItens([
                  ...cartItens,

                  {
                    _id: p._id,
                    name: p.name,
                    img: p.img,
                    price: p.price,
                  },
                ]);
              }}
            >
              Adicionar ao Carrinho
            </button>
          </div>
          
        ))}
      </ListContainer>

      <Menu />
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #34d97e;

  header {
    width: 100%;
    height: 60px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
  }

  p {
    font-size: 14px;
  }
  .logo {
    display: flex;
    align-items: center;
  }

  .right {
    display: flex;
    align-items: center;
    font-size: 28px;
    opacity: 0.9;
    font-weight: 600;
    gap: 15px;
    cursor: pointer;
    ion-icon[name="cart-outline"] {
      cursor: pointer;
    }
    ion-icon[name="menu-outline"] {
      cursor: pointer;
    }
  }
  .cart {
    display: flex;
    align-items: center;
  }
  .menu {
    display: flex;
    align-items: center;
  }
`;

const Eco = styled.h1`
  font-size: 19px;
  color: green;

  font-family: "Bungee Shade", cursive;
`;
const Shop = styled.h1`
  font-size: 22px;
  color: brown;
`;
const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3px;
  box-sizing: border-box;

  div {
    box-sizing: border-box;
    background-color:  	#90EE90;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: flex-end;
    width: 300px;
    height: 300px;
    margin: 10px;
 
  }
  div img {
    width: 100px;
    height: 100px;
  }
  div p {
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  div span {
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    border-radius: 5px;
    margin-bottom: 0px;
  }
`;
