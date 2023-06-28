import styled from "styled-components";

export const Perfil = styled.main`
.container{
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.card{
  margin-bottom: 30px;
    h1{
font-size: 30px;
font-family: 'Poppins', sans-serif;
    }
}

.card .datanames{
   margin-top: 30px;
   span{
    font-weight: bold;
   }
   .datatypes{
    margin-bottom: 40px;
   }
}
`