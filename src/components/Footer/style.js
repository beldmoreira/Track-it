import styled from "styled-components";

const Footer = styled.div `
    height: 70px;
    width: 375px;
    border-radius: 0px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;

    svg{
        height: 91px;
        width: 100%;
    }

`;
const Typography = styled.p `
height: 22px;
width: 68px;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
font-color: #52B6FF;
`;
const TodayProgress = styled.div`
  width: 91px;
  height: 91px;
  border-radius: 50%;
  background-color: #52b6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: fixed;
  bottom: 30px;
  left: 40vw;
`;

export{
    Footer,
    Typography,
    TodayProgress
 
}