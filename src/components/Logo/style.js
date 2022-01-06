import styled from "styled-components";

const Container = styled.div`
  padding: 41px 0;
  font-size: 64px;
  font-family: 'Pacifico', cursive;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    position: relative;
    bottom: -3px;
    right: -5px;
    width: 64px;
    height: 64px;
  }

  .title {
    position: relative;
    left: -15px;
  }
`;

export {
  Container
}