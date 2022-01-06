import axios from 'axios';
import React, { useState } from 'react';
import Logo from '../Logo';
import Input from '../Input';
import BiggerButton from '../BiggerButton';
import { Container, StyledLink } from './style';



export default function Login({setUser, setToken}){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      navigate('/habitos')
    });
    promise.catch(error => console.log(error.response));
  }
return(
    <>
    <Container>
        <Logo/>
        <form onSubmit={handleLogin}>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" />
            <BiggerButton type="submit"> Entrar</BiggerButton>
        </form>
        <StyledLink to="/cadastro"> Não tem uma conta? Cadastre-se!</StyledLink>
    </Container>
    </>
);
}

