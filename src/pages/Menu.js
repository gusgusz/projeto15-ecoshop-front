import styled from "styled-components";
import { Link } from "react-router-dom";
import { authContext } from "../App";
import { useContext } from "react";

export default function RegisterPopUp() {
  const { visibility, setVisibility } = useContext(authContext);

  function handleCloseOutline() {
    setVisibility("hidden");
  }

  return (
    <StyledPopUp visibility={visibility}>
      <div>
        <table onClick={handleCloseOutline}>
          <ion-icon name="close-outline"></ion-icon>
        </table>
      </div>

      <span>
        <Link to={`/sign-in`}>
          <div> Sign In </div>
        </Link>
        <Link to={`/sign-up`}>
          <div> Sign Up </div>
        </Link>
      </span>
    </StyledPopUp>
  );
}

const StyledPopUp = styled.nav`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #057a55;
  border-radius: 5px;
  position: fixed;
  z-index: 10;

  visibility: ${(props) => props.visibility};
  div {
    width: 50px;
    height: 50px;
    padding: 20px 0 40px 20px;

    table {
      width: 35px;
      height: 35px;
      color: red;
      font-size: 30px;
      font-weight: 800;
      border: 1px solid red;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0 0 40px;
      ion-icon[name="close-outline"] {
        cursor: pointer;
      }
    }
  }

  span {
    width: 100%;
    height: 190px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 5px;
    background-color: #057a55;
    opacity: 0.9;
    padding: 10px 3px 0 3px;
    z-index: 11;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 170px;
      height: 55px;
      background-color: #34d97e;
      border-radius: 5px;
      font-size: 22px;
      font-weight: 700;
      color: black;
      cursor: pointer;
      padding-bottom: 25px;
      padding-right: 10px;
    }
  }
  h1 {
    font-size: 30px;
    font-weight: 700;
    color: black;
    padding: 5px 0;
  }
`;
