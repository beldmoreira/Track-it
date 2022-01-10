import styled from "styled-components";

const TopBar = styled.div`
height: 70px;
width: 100%;
justify-content:space-between;
align-items: center;
flex-direction: column;
background-color: #126BA5;
box-shadow: 0px 4px 4px 0px #00000026;

svg{
    height: 49px;
    width: 100%;
}
`;
const UserInfo = styled.div `
width: 51px;
height: 51px;
background-color:#FFFFFF;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export {
    TopBar,
    UserInfo
}
