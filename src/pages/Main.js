import Logo from '../components/Logo';
import styled from 'styled-components';
import { useState } from 'react';
import Url from '../services/Api.js';
import axios from 'axios';
import { authContext } from '../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {
    const navigate = useNavigate();
    const { Auth} = useContext(authContext);

    return(
        oiiii
    )

}