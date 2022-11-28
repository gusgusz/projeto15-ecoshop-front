import styled from "styled-components";
import { useState, useEffect } from "react";
import { authContext } from '../App';
import { useContext} from 'react';
import axios from "axios";
import Url from "../services/Api";


const products = [
  {
    name: "COPO FIBRA DE BAMBU 793",
  img: "https://brindeecologico.com.br/images/produtos/produto-1057348138-imgeco-12-brinde-78621810536-ecologico.jpg",
  price: "30.00",
  describe:"Copo 500 ml com tampa, Produzido com Fibra de Bambu, Medidas: 15 x 9,3 cm, Produto sustentável com 50% a menos de Plástico"
},
{
  name: "COPO FIBRA DE BAMBU 793",
img: "https://brindeecologico.com.br/images/produtos/produto-1057348138-imgeco-12-brinde-78621810536-ecologico.jpg",
price: "30.00",
describe:"Copo 500 ml com tampa, Produzido com Fibra de Bambu, Medidas: 15 x 9,3 cm, Produto sustentável com 50% a menos de Plástico"
},
{
  name: "COPO FIBRA DE BAMBU 793",
img: "https://brindeecologico.com.br/images/produtos/produto-1057348138-imgeco-12-brinde-78621810536-ecologico.jpg",
price: "30.00",
describe:"Copo 500 ml com tampa, Produzido com Fibra de Bambu, Medidas: 15 x 9,3 cm, Produto sustentável com 50% a menos de Plástico"
}
,
{
  name: "COPO FIBRA DE BAMBU 793",
img: "https://brindeecologico.com.br/images/produtos/produto-1057348138-imgeco-12-brinde-78621810536-ecologico.jpg",
price: "30.00",
describe:"Copo 500 ml com tampa, Produzido com Fibra de Bambu, Medidas: 15 x 9,3 cm, Produto sustentável com 50% a menos de Plástico"
},
{
  name: "COPO FIBRA DE BAMBU 793",
img: "https://brindeecologico.com.br/images/produtos/produto-1057348138-imgeco-12-brinde-78621810536-ecologico.jpg",
price: "30.00",
describe:"Copo 500 ml com tampa, Produzido com Fibra de Bambu, Medidas: 15 x 9,3 cm, Produto sustentável com 50% a menos de Plástico"
}
]
;




export default function PaymentCheck() {


  const { auth} = useContext(authContext);
  const [paymentForm, setPaymentForm] = useState(false);

  useEffect(() => {
    getTotal();
  }, []);


  const [total, setTotal] = useState(0);

  function tryPayment(){
    if(!auth){
      alert("Você precisa estar logado para finalizar a compra");
      return;
    }
    if(total === 0){
      alert("Você precisa adicionar produtos para finalizar a compra");
      return;
    }
    if(paymentForm){
      const promisse = axios.post(`${Url}/payment`, {
        auth,
        total,
      paymentForm});
      alert("Compra finalizada com sucesso!");
      return;
    }

  }

  function getTotal(){
    let tot = 0;
    products.map((p) => {

      return tot += parseInt(p.price);
    });
    setTotal(tot);
    console.log(tot);
  };
  
    return (
        <Content>
        <h1>Confirme sua compra</h1>
        <Prod>
          {products.map((p,index) => {
            return (
              <div index>
                <span> {p.name}</span>
                <p>R$ {p.price}</p>
                <div>
                <ion-icon name="add-circle-outline"></ion-icon>
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
          <p>Rua: {auth.adress.street}</p>
          <p>Número: {auth.adress.number}</p>
          <p>Complemento: {auth.adress.complement}</p>
          <p>Cep: {auth.adress.cep}</p>
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
          <div onClick={() => {setPaymentForm("Paypal")}}>
            <ion-icon name="logo-paypal"></ion-icon>
            <p>Paypal</p>
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
  overflow: scroll;

  button{
    width: 120px;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color: #fff;
    margin: 20px 0;
  }
`;

const Prod = styled.div`
  display: flex;
  background-color: #fff;
  width: 80%;
  height: 300px;
  
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
  height: 80px;
  background-color: #fff;
  padding: 6px;

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

    }
    div:hover{
      background-color: #34d97e;
    }
  }

`;