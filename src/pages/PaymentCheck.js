import styled from "styled-components";
import { useState, useEffect } from "react";
import { authContext } from '../App';
import { useContext} from 'react';
import axios from "axios";
import Url from "../services/Api.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";




export default function PaymentCheck() {

 const navigate = useNavigate();
  const { auth} = useContext(authContext);
  const {cartItens} = useContext(authContext);
  const {setCartItens} = useContext(authContext);
  
  const [paymentForm, setPaymentForm] = useState(false);

  useEffect(getTotal, [cartItens]);


  const [total, setTotal] = useState(0);

  function deleteProduct(index){
    const newCart = cartItens.filter((item, i) => i !== index);
    setCartItens(newCart);
   
  }

  function tryPayment(){
   
    if(total === 0){
      alert("Você precisa adicionar produtos para finalizar a compra");
      return;
    }
    if(!auth){
      navigate("/sign-in");
      return;
    } 
    if(!paymentForm){
      alert("Selecione uma forma de pagamento");
      return;
    }
    if(paymentForm){
      console.log("entrou no if do paymentForm");
     
      const promisse = axios.post(`${Url}/payment`, {
        auth,
        total,
      paymentForm});
      promisse.then((response) => {
        console.log("entrei no then do payment",{
          auth,
           cartItens,
           total,
         paymentForm})
        setCartItens([]);
        navigate("/");
        alert("Compra finalizada com sucesso!");
        return;
      });
      promisse.catch((err) => {
        console.log("Entrei no catch do payment",err);
      });
    }

  }

  function getTotal(){
    let tot = 0;
    cartItens.map((p) => {

      return tot += parseInt(p.price);
    });
    setTotal(tot);
  };
  
    return (
        <Content>
               <header>
        <div className="logo">
          <Eco>ECO</Eco>
          <Shop>SHOP</Shop>
        </div>

        <div className="right">
         
          <Link to="/">
          <ion-icon name="home-outline"></ion-icon>
          </Link>
         
        </div>
      </header>
        <h1>Confirme sua compra</h1>
        <Prod>
          {cartItens.map((p,index) => {
            return (
              <div index>
                <span> {p.name}</span>
                <p>R$ {p.price}</p>
                <div onClick={() => deleteProduct(index)}>
                
                <ion-icon name="trash-outline"></ion-icon>
                </div>
                
              </div>
            );
           
          })}
           <h3>Total: R$ {total}</h3>
        </Prod>
        <h2>Endereço de entrega</h2>
        <Adress>
          
          {auth ? 
          <>
          <div>
          <p>Rua: {auth.checkUser.adress.street}</p>
          <p>Número: {auth.checkUser.adress.number}</p>
          <p>Complemento: {auth.checkUser.adress.complement}</p>
          <p>Cep: {auth.checkUser.adress.cep}</p>
          </div>
          </>
          :
          <h4>Logue para ver seu endereço</h4>}
          
        </Adress>
        <h2>Forma de pagamento</h2>
        <Pay>
         
          <div onClick={() => setPaymentForm("Cartão")}>
          <div>
            <ion-icon name="card-outline"></ion-icon>
            <label>Cartão</label>
          <input class="w3-radio" type="radio" name="gender" value="male" ></input>
          </div>
          <div onClick={() => setPaymentForm("Boleto")}>
          <ion-icon name="barcode-outline"></ion-icon>
          <label>Boleto</label>
          <input class="w3-radio" type="radio" name="gender" value="male" ></input>

         </div>
          <div onClick={() => setPaymentForm("Pix")}>
            <ion-icon name="wallet-outline"></ion-icon>
            <label>Pix</label>
            <input class="w3-radio" type="radio" name="gender" value="male" ></input>
          
          </div>
        
          </div>
        </Pay>

        <button onClick={() => tryPayment()}>Confirmar Pagamento</button>
        </Content>
    );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  align-items: center;
  background-color: #34d97e;
  overflow-y: scroll;
  

  header {
    width: 100%;
    height: 60px;
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

  button{
    width: 40%;
    height: 80px;
    border-radius: 10px;
    border: none;
    background-color: #fff;
    margin: 20px 0;
    cursor: pointer;
  }
  button:hover{
    background-color: brown;
  }
`;

const Prod = styled.div`
  display: flex;
  background-color: #fff;
  width: 80%;
  height: 300px;
  border-radius: 20px;
  
  flex-direction: column;
  padding: 20px;
  position: relative;
  overflow-y: scroll;

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }
  h3{
    bottom: 0;
    right: 8px;
  }
`;

const Adress = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 160px;
  background-color: #fff;
  padding: 6px;
  overflow-y: scroll;
  border-radius: 20px;
  padding-top: 20px;
  padding-bottom: 20px;

`;
const Pay = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  height: 140px;
  background-color: #fff;
  padding: 6px;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: column;
  border-radius: 20px;

  div{
    display: flex;
    justify-content: space-around;
    
   

    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 70px;
      height: 70px;
      margin-left: 30px;
      border: 1px solid black;
      input{
        cursor: pointer;
      }
     

    }
    div:hover{
      background-color: #34d97e;
    }
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