import styled from "styled-components";


export default function Footer(){
    return(
        <>
    <Footer>
        <HabitsSection> Hábitos </HabitsSection>
        
        <HistorySection>  </HistorySection>
    </Footer>

        </>
    );
}
const Footer = styled.div `
height: 70px;
width: 375px;
border-radius: 0px;
background-color: #FFFFFF;

`;
const HabitsSection = styled.p `
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
const HistorySection=styled.p`
height: 22px;
width: 79px;
font-family: Lexend Deca;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
`;