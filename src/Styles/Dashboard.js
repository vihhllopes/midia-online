import styled from "styled-components";
export const Dashboard = styled.div`
  font-family: "Poppins", sans-serif;
  .linkButton {
    text-decoration: none;
    color: #ffffff;
    font-weight: bolder;
  }
  .dashboard {
    position: relative;
    left: 250px;
    background-color: #f6f6f6;
    min-height: 100vh;
    width: calc(100% - 250px);
    padding: 10px 24px;
    transition: all 0.5s ease;
  }
  nav.close ~ .dashboard {
    left: 73px;
    width: calc(100% - 73px);
  }
  .dashboard .top {
    position: fixed;
    top: 0;
    left: 250px;
    display: flex;
    width: calc(100% - 250px);
    justify-content: space-between;
    align-items: center;
    padding: 10px 14px;
    background-color: #ffff;
    transition: all 0.5s ease;
    z-index: 10;
  }
  .dashboard .top .sidebar-toggle {
    font-size: 26px;
    color: #000;
    cursor: pointer;
  }
  .dashboard .dash-content {
    padding-top: 50px;
  }
  .dash-content .title {
    display: flex;
    align-items: center;
    margin: 60px 0 30px 0;
  }
  .dash-content .title svg {
    position: relative;
    height: 35px;
    width: 35px;
    background-color: #9866f4;
    border-radius: 6px;
    color: #ffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
    padding: 10px 0px;
  }
  .dash-content .title .text {
    font-size: 24px;
    font-weight: 500;
    color: var(--text-color);
    margin-left: 10px;
  }
  .dash-content .boxes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .dash-content .boxes .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    width: calc(100% / 3 - 15px);
    padding: 15px 20px;
    background-color: #4da3ff;
    transition: all 0.5s ease;
  }
  .boxes .box svg {
    font-size: 35px;
    color: #000;
  }
  .boxes .box .text {
    white-space: nowrap;
    font-size: 18px;
    font-weight: 500;
    color: #000;
  }
  .boxes .box .number {
    font-size: 40px;
    font-weight: 500;
    color: #000;
  }
  .boxes .box.box2 {
    background-color: #6eceae;
  }
  .boxes .box.box3 {
    background-color: #e7d1fc;
  }
  .dash-content .activity .activity-data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    background: #f6f6f6;
    border: 1px solid #dcdcdc;
    padding: 20px 30px;
    margin: 0 20px;
    border-radius: 12px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  .activity .activity-data {
    display: flex;
  }
  .activity-data .data {
    display: flex;
    flex-direction: column;
    margin: 0 15px;
  }
  .activity-data .data-title {
    font-size: 15px;
    font-weight: 500;
    color: #000;
    font-weight: bold;
  }
  .activity-data .data .data-list {
    font-size: 12px;
    font-weight: 400;
    margin-top: 20px;
    white-space: nowrap;
    color: #000;
  }
  .search {
    display: flex;
    margin-top: 5%;
    
  }
  .search .input {
    width: 80%;
   
  }
  .search .button-search {
    background-color: #9866f4;
    border: none;
  }
  button {
    margin-top: 5%;
   margin-right: 40%;
    outline: none;
    border: none;
    border-radius: 6px;
    font-size: 18px;
    color: #fff;
    padding: 10px 26px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: rgb(152, 102, 244);
    background: linear-gradient(
      90deg,
      rgba(152, 102, 244, 1) 10%,
      rgba(122, 186, 228, 1) 100%
    );
  }

  /* Responsive Media Query */
  @media (max-width: 1240px) {
    .sidebar {
      width: 60px;
    }
    .sidebar.active {
      width: 220px;
    }
    .home-section {
      width: calc(100% - 60px);
      left: 60px;
    }
    .sidebar.active ~ .home-section {
      /* width: calc(100% - 220px); */
      overflow: hidden;
      left: 220px;
    }
    .home-section nav {
      width: calc(100% - 60px);
      left: 60px;
    }
    .sidebar.active ~ .home-section nav {
      width: calc(100% - 220px);
      left: 220px;
    }
  }
  .card {
    width: 100%;
    margin-top: 10%;
    background: #f6f6f6;
    border: 1px solid #dcdcdc;
    color: #000;
    width: 1000px;
    height: 300px;
  }
 
  .modal .button-modal {
    margin-top: 5%;
    outline: none;
    border: none;
    border-radius: 6px;
    font-size: 18px;
    color: #fff;
    padding: 10px 26px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: rgb(152, 102, 244);
    background: linear-gradient(
      90deg,
      rgba(152, 102, 244, 1) 10%,
      rgba(122, 186, 228, 1) 100%
    );
  }
`;

