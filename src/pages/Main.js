import Logo from '../components/Logo';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Url from '../services/Api.js';
import axios from 'axios';
import { authContext } from '../App';
import { useContext} from 'react';
import { useNavigate} from 'react-router-dom';

export default function Main() {
    const navigate = useNavigate();
    const { Auth} = useContext(authContext);


    useEffect(getProducts, []);


    const [products, setProducts] = useState([]);
    
    function getProducts() {
        const promise = axios.get(`${Url}/products`);
        promise.then((response) => {
            setProducts(response.data);
        });
        promise.catch((err) => {
            alert(err.response.message);
        });
    }


    return(
        <Container>
            <TopBar>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG-zCznbAIVfZP8LxVv3TDW8ZKowCQgiQvBg&usqp=CAU"></img>

            </TopBar>
            <Content>
                <Session>
                    <Prod>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG-zCznbAIVfZP8LxVv3TDW8ZKowCQgiQvBg&usqp=CAU"></img>
                        <h1>Nome do Produto</h1>
                    </Prod>
                </Session>
            </Content>

        </Container>
    )

}

const Container = styled.div`
position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TopBar = styled.div`
    width: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: #C6C6C6;

    img{
        width: 50px;
        margin-left: 10px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const Session = styled.div`
    display: flex;
`;

const Prod = styled.div`
    position: relative;
`;