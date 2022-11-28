import Logo from "../components/Logo";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Url from "../services/Api.js";
import axios from "axios";
import { authContext } from "../App";
import { useContext } from "react";

export default function Products() {
  const { auth } = useContext(authContext);
  const [listProducts, setListProducts] = useState(undefined);

  useEffect(() => {
    const promise = axios.get(`${Url}/products`);

    promise.then((res) => {
      console.log(res.data.products);
      setListProducts(res.data.products);
      console.log("auth");
      console.log(auth);
    });

    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  function addProduct(){
    console.log("add product");
  }

  if (!listProducts) {
    return <div>Carregando</div>;
  }

  return (
    <Content>
      <Logo />

      <ListContainer>
        {listProducts.map((p) => (
          <div>
            <img src={p.img} alt="imagem" />
            <span> {p.describe}</span>
            <p>R$ {p.price}</p>
            <button
              onClick={addProduct}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </ListContainer>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;

  justify-content: center;
  align-items: center;
  background-color: #34d97e;
  overflow-y: scroll;
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
    background-color: #057a55;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: flex-end;
    width: 300px;
    height: 300px;
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
