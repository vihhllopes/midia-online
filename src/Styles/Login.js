import styled from "styled-components";
export const AcessoStyles = styled.main`
font-family: 'Poppins', sans-serif;
.linkButton {
    text-decoration: none;
    color: #ffffff;
    font-weight: bolder;
   
  }
  .container {
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .card-user {
    width: 50%;
    padding: 40px 30px;
    background-color: #9866f4;
    color: #ffff;
    width: 500px;
    height: 500px;
    Button {
    background-color: #6eceae;
    border-radius: 6px;
    padding: 10px 0px;
    width: 50%;
    display: block;
    margin-bottom: 30px;
    border: none;
    
  }
  }
  .card-adm {
    width: 50%;
    padding: 40px 30px;
    background-color: #1F8A70;
    color: #ffff;
    width: 500px;
    height: 500px;
    Button {
    background-color: #9866f4 ;
    border-radius: 6px;
    padding: 10px 0px;
    width: 50%;
    display: block;
    margin-bottom: 30px;
    border: none;
    
  }
  }
  
  .form-title {
    font-size: 20px;
    color: #ffff;
    font-weight: 600;
 margin-bottom: 30px;
    
  }
  .form-title svg{
    font-size: 85px;
    color: #ffff;
 
    
  }
  .error{
    color: #ffffff;
  }
`;



export const Login = styled.main`
.linkButton {
    text-decoration: none;
    color: #ffffff;
    font-weight: bolder;
  }
  .row {
    position: absolute;
    top: 15%;
    left: 7%;
    z-index: 12;
  }
  h1 {
    font-size: 25px;
    color: #2c3350;
    font-weight: 600;
   margin-bottom: 30px;
    
  }
  img {
    width: 80%;
  }
  
 .button-user {
    background-color: #6eceae;
    border-radius: 6px;
    padding: 10px 0px;
    width: 50%;
    display: block;
    margin-bottom: 30px;
    border: none;
    :hover{
        background-color: #2c3350;
    }
  }
  .button-adm {
    background-color:#9866f4;
    border-radius: 6px;
    padding: 10px 0px;
    width: 50%;
    display: block;
    margin-bottom: 30px;
    border: none;
    :hover{
        background-color: #2c3350;
    }
  }
  Link {
    text-decoration: none;
  }
`;
