import Logo from '../components/Logo';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Url from '../services/Api.js';
import axios from 'axios';

export default function SignUp() {

    const navigate= useNavigate();
    const [form,setForm] = useState({
    name:''
    ,email:'' 
    ,tel: ''
    ,cpf: ''
    ,street: '' 
    ,number: ''
    ,complement: ''
     ,cep: ''
    , password:''
    ,repeatPassword: ''});

    const [isLoading, setIsLoading] = useState(false);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form)
      }

      function handleSubmit(e) {
      
        e.preventDefault();
        setIsLoading(true);
        const promise = axios.post(`${Url}/sign-up`, { ...form });
       
        promise.then(() => {
          setIsLoading(false);
         navigate("/sign-in");
        });
        promise.catch((err) => {
          setIsLoading(false);
    
          alert(err.response.message);
        });
        console.log(form);
      }
    
      
    return(
        <Content>
             
            <div className='request'>
            
            <Logo/>
             <Form >
                    <h1>Cadastro</h1>

                    <input name = 'name' value={form.name} onChange={handleChange} disabled={isLoading} type="text" placeholder="Nome" required/>
                    <input name = 'email' value={form.email} onChange={handleChange} disabled={isLoading} type="email" placeholder="E-mail" required/>
                    <input name = 'tel' value={form.tel} onChange={handleChange} disabled={isLoading} type="tel" placeholder="Telefone" required/>
                    <input name = 'cpf' value={form.cpf} onChange={handleChange} disabled={isLoading} type="text" placeholder="CPF" required/>
                    <input name = 'cep' value={form.cep} onChange={handleChange} disabled={isLoading} type="text" placeholder="CEP...ex: 88040-310" required/>
                    <input name = 'street' value={form.street} onChange={handleChange} disabled={isLoading} type="text" placeholder="rua" required/>
                    <input name = 'number' value={form.number} onChange={handleChange} disabled={isLoading} type="text" placeholder="número" required/>
                    <input name = 'complement' value={form.complement} onChange={handleChange} disabled={isLoading} type="text" placeholder="complemento" required/> 
                    <input name = 'password' value={form.password} onChange={handleChange} disabled={isLoading} type="password" placeholder="Senha" required/>
                    <input name = 'repeatPassword' value={form.repeatPassword} onChange={handleChange} disabled={isLoading} type="password" placeholder="Confirme a senha" required/>
                    <button disabled={isLoading} onClick={handleSubmit} type="submit">Cadastrar</button>
             </Form>
             <Link to="/sign-in">
             <span>Já tem o cadastro? Faça login!!!</span>
             </Link>
             </div>
       </Content>
    );
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    background-color: #34D97E;
    overflow-y: scroll;
    
   

    .request{
        background-color: #008F41;
        display: flex;
        flex-direction: column;
        width: 80%;
        
        align-items: center;
        
        span{
        color: white;
        text-decoration: none;
        }
        span:hover{
            text-decoration: underline;
        }
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 600px;

    h1{
        color: #FF7975;
        align-self: center;
    }
    input{
        width: 90%;
        height: 40px;
        font-size: 20px;
        align-self: center;
        margin-bottom: 6px;
        border-radius: 5px;
        
    }
    button{
        background-color: #34D97E;
        width: 92%;
        height: 50px;
        border-radius: 5px;
        align-self: center;
        border: 1px solid #34D97E;
        margin-top: 10px;
        cursor: pointer;
    }
    button:hover{
        background-color: brown;
    }
`;