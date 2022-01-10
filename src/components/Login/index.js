import axios from 'axios';
import { useNavigate } from 'react-router';
import React, { useState } from 'react';
import Logo from '../Logo';
import Input from '../Input';
import BiggerButton from '../BiggerButton';
import { Container, StyledLink } from './style';
import Loader from "react-loader-spinner";

export default function Login({setUser, setToken}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loadingButton, setLoadingButton] = useState('');
  const [inputMode, setInputMode]= useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
      email,
      password
    });

    promise.then(response => {
      setUser(response.data);
      setToken(response.data.token);
      setInputMode('disabled');
      setLoadingButton(
      <Loader type="ThreeDots" color="#FFFFFF" height={80} width={80} />)
      navigate('/hoje')
    });
    promise.catch(error => console.log(error.response));
  }
return(
    <>
    <Container>
        <Logo/>
        <form onSubmit={handleLogin}>
            <Input type="email" value={email} disabled = {inputMode} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
            <Input type="password" value={password} disabled = {inputMode} onChange={(e) => setPassword(e.target.value)} placeholder="senha" />
            <BiggerButton type="submit"> Entrar {loadingButton}</BiggerButton>
        </form>
        <StyledLink to="/cadastro"> Não tem uma conta? Cadastre-se!</StyledLink>
    </Container>
    </>
);
}

