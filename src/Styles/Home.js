import styled from "styled-components";
export const HomeStyles = styled.main`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
 .logo .logo_name svg {
    margin-top: 20px;
    font-size: 60px;
   align-items: center;
  color:#9866F4;
  }
.linkButton {
    text-decoration: none;
    color: #ffffff;
    font-weight: bolder;
  }

nav{
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 12;
}
.navbar{
  width: 90%;
  display: flex;
  margin: 20px auto 0 auto;
  align-items: center;
  justify-content: space-between;
}

.logo svg{
  height: 120%;
  width: 120%;
  object-fit: contain;
}
nav .menu{
  display: flex;
}
nav .menu li{
  list-style: none;
  margin: 0 10px;
}
nav .menu a{
  color: #2c3e50;
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
}
nav .menu a:hover{
  color: #9866F4;
}
nav .search-box{
  position: relative;
  height: 40px;
  width: 250px;
}
.search-box input[type="text"]{
  position: absolute;
  font-size: 18px;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  outline: none;
  color: #9866F4;
  border: 1px solid #9866F4;
  background: #ffff;
  padding: 0 10px 0 40px;
}
.search-box a{
  position: absolute;
  top: 50%;
  left: 10px;
  font-size: 10px;
  color: #2c3350;
  transform: translateY(-50%);
  border-right: 2px solid #2c3350;
  padding: 0 5px 0 0;
}
.text-content{
  position: absolute;
  margin-top: 20%;
  left: 7%;
  z-index: 12;
}
.text-content .text{
  font-size: 27px;
  color: #2c3350;
}
.text-content .name{
color: #2c3350;
 font-size: 75px;
 font-weight: 600;
 margin: -20px 0 0 -3px;
}
.text-content .job{
 color: #2c3350;
 font-size: 30px;
 margin: 5px 0;
 margin-top: -4px;
 display: flex;
}
.text-content .typing-text{
  margin-left: 10px;
  overflow: hidden;
  white-space: nowrap;
  border-right: 4px solid #1de2d1;
  animation: typing 10s steps(20) infinite;
}
@keyframes typing{
  0%{
    width: 0ch;
  }
  50%{
    width: 15ch;
  }
  100%{
    width: 0ch;
  }
}
.text-content .job .one{
  color: #9866F4;
}
.text-content .job .two{
  color: #9866F4;
}
.buttons{
  margin: 30px 0 0 0px;
}
.text-content .buttons button{
  outline: none;
  margin: 0 10px;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  color: #fff;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgb(152,102,244);
background: linear-gradient(90deg, rgba(152,102,244,1) 10%, rgba(122,186,228,1) 100%);
}
.buttons button:hover{
  transform: scale(0.97);
}
.marketing img{
  position: absolute;
 width: 50%;
  right: 80px;

}

  .title {
 
    margin-bottom: 20px;
    h1 {
      font-size: 86px;
      font-weight: bold;
      color: #9866f4;
      margin-top :30%;
    }
    p {
      font-size: 15px;
    }
    button {
      background-color: #3decb1;
      border: none;
      position: relative;
      border: none;
      border-radius: 6px;
      font-size: 18px;
      color: #ffffff;
      padding: 10px;
      width: 150px;
      text-align: center;
      transition-duration: 0.4s;
      text-decoration: none;
      overflow: hidden;

      cursor: pointer;
    }
  }
`;