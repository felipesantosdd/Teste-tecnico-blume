import styled from "styled-components";

export const TitleStyle = styled.p`
    font-size: 1.5em;
    font-weight: 900;
    text-align: center;
    margin: 0;
    width: 100%;
`


export const ContainerStyle = styled.div`
background-color: #36393F;
max-width: 600px;
height: auto;
padding: 3%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
background-color: #36393F;
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
margin: 50px;
`
export const CardStyle = styled.div`
    width: 250px;
    height:100px;
    margin: 10px;
    border: 1px solid rgba(255, 255, 255, 0.9);
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    `