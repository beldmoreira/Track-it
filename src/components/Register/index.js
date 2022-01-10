import axios from 'axios';
import { useNavigate } from 'react-router';
import React, { useState } from 'react';
import Logo from '../Logo';
import Input from '../Input';
import BiggerButton from '../BiggerButton';
import { Container, StyledLink } from './style';
import Loader from "react-loader-spinner";

export default function Register({setUser, setToken}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [loadingButton, setLoadingButton] = useState('');
    const navigate = useNavigate();


    function handleLogin(e) {
        e.preventDefault();

    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",{
        email,
	    name,
	    image, 
	    password
    });
    promise.then(response => {
        setUser(response.data);
        setToken(response.data.token);
        setLoadingButton(
            <Loader type="ThreeDots" color="#FFFFFF" height={80} width={80} />)
        navigate('/habitos')
      });
      promise.catch(error => alert("Confira se todos os campos foram preenchidos e reveja os dados informados"));
    }
return(
    <>
    <Container>
        <Logo/>
        <form onSubmit={handleLogin}>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" />
            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="nome" />
            <Input type="photo" value={image} onChange={(e) => setImage(e.target.value)} placeholder="foto" />
            <BiggerButton type="submit"> Cadastrar {loadingButton} </BiggerButton>
        </form>
        <StyledLink to="/"> Já tem uma conta? Faça login!</StyledLink>
    </Container>
    </>
);
};