import Logo from "../components/Logo";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Url from "../services/Api.js";
import axios from "axios";
import { authContext } from "../App";
import { useContext } from "react";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    cpf: "",
    street: "",
    number: "",
    complement: "",
    cep: "",
    password: "",
    repeatPassword: "",
  });
  const { setVisibility } = useContext(authContext);
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const promise = axios.post(`${Url}/sign-up`, { ...form });

    promise.then(() => {
      setIsLoading(false);
      setVisibility("hidden");
      navigate("/");
    });
    promise.catch((err) => {
      setIsLoading(false);

      alert(err.response.message);
    });
    console.log(form);
  }

  return (
    <>
     
    
    <Content>
    <Logo />
    <div className="request">
     
    <h1>Cadastro</h1>
        
        <Form onSubmit={handleSubmit}>
         

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            disabled={isLoading}
            type="text"
            placeholder="Nome"
            required
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            disabled={isLoading}
            type="email"
            placeholder="E-mail"
            required
          />
          <input
            name="tel"
            value={form.tel}
            onChange={handleChange}
            disabled={isLoading}
            type="tel"
            placeholder="Telefone"
            required
          />
          <input
            name="cpf"
            value={form.cpf}
            onChange={handleChange}
            disabled={isLoading}
            type="text"
            placeholder="CPF"
            required
          />
          <input
            name="cep"
            value={form.cep}
            onChange={handleChange}
            disabled={isLoading}
            type="text"
            placeholder="CEP...ex: 88040-310"
            required
          />
          <input
            name="street"
            value={form.street}
            onChange={handleChange}
            disabled={isLoading}
            type="text"
            placeholder="rua"
            required
          />
          <input
            name="number"
            value={form.number}
            onChange={handleChange}
            disabled={isLoading}
            type="text"
            placeholder="n??mero"
            required
          />
          <input
            name="complement"
            value={form.complement}
            onChange={handleChange}
            disabled={isLoading}
            type="text"
            placeholder="complemento"
            required
          />
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            disabled={isLoading}
            type="password"
            placeholder="Senha"
            required
          />
          <input
            name="repeatPassword"
            value={form.repeatPassword}
            onChange={handleChange}
            disabled={isLoading}
            type="password"
            placeholder="Confirme a senha"
            required
          />

<button disabled={isLoading} type="submit">
            Cadastrar
          </button>
      
         
        </Form>
    
      </div>
      <Link to="/sign-in">
          <span>J?? tem o cadastro? Fa??a login!!!</span>
        </Link>
    </Content>
    </>
  );
}

const Content = styled.div`

  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100%;

  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  background-color: #34d97e;
  overflow: scroll;



  .request {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    width: 78%;
    height: 88%;
    overflow-y: scroll;
    align-items: center;

    span {
      color: white;
      text-decoration: none;
    }
    span:hover {
      text-decoration: underline;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  

  h1 {
    color: #ff7975;
    align-self: center;
  }
  input {
    width: 90%;
    height: 40px;
    font-size: 20px;
    align-self: center;
    margin-bottom: 6px;
    border-radius: 5px;
  }
  button {
    background-color: #34d97e;
    width: 92%;
    height: 50px;
    border-radius: 5px;
    align-self: center;
    border: 1px solid #34d97e;
    margin: 20px 0;;
    cursor: pointer;
  }
  button:hover {
    background-color: brown;
  }
`;
