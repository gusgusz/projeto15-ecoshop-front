import Logo from '../components/Logo';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Url from '../services/Api.js';
import axios from 'axios';
import { authContext } from '../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const navigate = useNavigate();
    const {setAuth} = useContext(authContext);
    const [isLoading, setIsLoading] = useState(false);

    const [form,setForm] = useState({
    email:'' ,
    password:''
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
      }

    function handleSubmit() {
      
  
        setIsLoading(true);
        const promise = axios.post(`${Url}/sign-in`, { ...form });
       
        promise.then((response) => {
            console.log("entrei no handle", form)
          setIsLoading(false);
          console.log('user', response.data);
          setAuth(response.data);
          navigate("/products");
        });
        promise.catch((err) => {
          setIsLoading(false);
    
          alert("deu ruim man", err.response);
        });
      }
    

    return(
        <Content>
                <Logo/>

            <div className='request'>
            
             <Form>
                    <h1>Login</h1>

                    
                    
                    <input name = 'email' value={form.email} onChange={handleChange} disabled={isLoading}  type="email" placeholder="E-mail" required/>
                   <input name = 'password' value={form.password} onChange={handleChange} disabled={isLoading} type="password" placeholder="Senha" required/>
                    <button  disabled={isLoading}  onClick={handleSubmit}>Entrar</button>
             </Form>
             <Link to="/sign-up">
             <span>Ainda não tem cadastro? Faça aqui!</span>
             </Link>
             </div>
       </Content>
    );
}

const Content = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    background-color: #34D97E;
    
   

    .request{
        background-color: #008F41;
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 80%;
        align-items: center;

       span{
        color: white;
        cursor: pointer;
        text-decoration: none;
        margin-top: 5px;
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
    height: 90%;

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