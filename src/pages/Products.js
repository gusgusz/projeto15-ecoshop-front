import Logo from "../components/Logo";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Url from "../services/Api.js";
import axios from "axios";

export default function Products() {
  const [listProducts, setListProducts] = useState(undefined);

  useEffect(() => {
    const promise = axios.get(`${Url}/products`);

    promise.then((res) => {
      console.log(res.data);
      setListProducts(res.data);
    });

    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  if (!listProducts) {
    return <div>Carregando</div>;
  }

  return (
    <Content>
      <Logo />
      <ListContainer></ListContainer>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: #34d97e;
  overflow-y: scroll;
`;

const ListContainer = styled.div`
  margin: 20px 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  div {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 30px;
    border-radius: 5px;
    margin-bottom: 5px;
  }
`;
