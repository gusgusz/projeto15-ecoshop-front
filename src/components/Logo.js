
import styled from "styled-components";


export default function Logo() {

    return(
        <Content>
            <div>
        <Eco>ECO</Eco>
        <Shop>SHOP</Shop>
        </div>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG-zCznbAIVfZP8LxVv3TDW8ZKowCQgiQvBg&usqp=CAU"} alt="Logo"/>
            
        </Content>
    );
}

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    width: 150px;
    height: 80px;
    background-color: white;
    padding: 10px;
    margin: 20px;
  
    


    img{
        width: 90px;
        height: 90px;
    }

`;

const Eco = styled.h1`
    font-size: 19px;
    color: green;
    
    font-family: 'Bungee Shade', cursive;
`;
const Shop = styled.h1`
    font-size: 22px;
    color: brown;

`;
    
