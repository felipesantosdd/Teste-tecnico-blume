import styled, { keyframes } from 'styled-components';

export const ContainerStyle = styled.div`
width: auto;
height: auto;
margin-top: 5%;
padding: 3%;
background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
`

export const FormStyle = styled.form`
display:flex; 
flex-direction: column; 
justify-content:space-between;
height: 130px;
`


const clouds = keyframes`
  0% {
    transform: translateX(15px);
  }

  50% {
    transform: translateX(0px);
  }

  100% {
    transform: translateX(15px);
  }
`;

const sunshines = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.6;
  }

  100% {
    transform: scale(1.4);
    opacity: 0;
  }
`;

export const Card = styled.div`
  width: 350px;
  height: 235px;
  position: relative;
  padding: 25px;
  background: radial-gradient(178.94% 106.41% at 26.42% 106.41%, #FFF7B1 0%, rgba(255, 255, 255, 0) 71.88%), #FFFFFF;
  box-shadow: 0px 155px 62px rgba(0, 0, 0, 0.01), 0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09), 0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 23px;
  transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Container = styled.div`
  width: 250px;
  height: 250px;
  position: absolute;
  right: -35px;
  top: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.7);
`;

export const Cloud = styled.img`
  width: 250px;
`;

export const Front = styled.div`
  padding-top: 45px;
  margin-left: 25px;
  display: inline;
  position: absolute;
  z-index: 11;
  animation: ${clouds} 8s infinite;
  animation-timing-function: ease-in-out;
`;

export const Back = styled.div`
  margin-top: -30px;
  margin-left: 150px;
  z-index: 12;
  animation: ${clouds} 12s infinite;
  animation-timing-function: ease-in-out;
`;

export const RightFront = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50% 50% 50% 0%;
  background-color: #4c9beb;
  display: inline-block;
  margin-left: -25px;
  z-index: 5;
`;

export const LeftFront = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50% 50% 0% 50%;
  background-color: #4c9beb;
  display: inline-block;
  z-index: 5;
`;

export const RightBack = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50% 50% 
`;
