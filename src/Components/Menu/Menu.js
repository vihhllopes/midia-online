import styled from "styled-components";

export const MenuLateral = styled.div`
  font-family: 'Poppins', sans-serif;
  body {
    position: relative;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 240px;
    padding: 6px 14px;
    border-right: 1px solid #dcdcdc;
    background: rgb(152, 102, 244);
    background: linear-gradient(
      90deg,
      rgba(152, 102, 244, 1) 10%,
      rgba(122, 186, 228, 1) 100%
    );
  }

  

  .logo_content .logo .logo_name svg {
    margin-top: 20px;
    font-size: 70px;
   align-items: center;
   color: #ffff;
  }

  .sidebar ul {
    margin-top: 50px;
  }
  .sidebar li {
    list-style: none;
  }
  .sidebar ul li {
    list-style: none;
    height: 50px;
    width: 100%;
    position: relative;
    margin: 0 px;
    line-height: 50px;
    margin-bottom: 20px;
  }

  .sidebar ul li a {
    color: #ffff;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-bottom: 60px;
    padding-top: 20px;

    :hover {
     color:#ffff;
      cursor: pointer;
    }
  }
  .sidebar ul li a span {
    font-size: 17px;
    text-align: center;
    margin-right: 1rem;
    margin-left: 0.8rem;
  }

  .sidebar ul li a svg {
    height: 50px;
    min-height: 50px;
    border-radius: 12px;
    line-height: 50px;
  }

  .sidebar .profile_content {
    position: absolute;
    color: #9866f4;
    bottom: 0;
    left: 0;
  }
  .sidebar .profile_content .profile {
    position: relative;
    padding: 10px 6px;
    height: 60px;
  }
  .sidebar .profile_content .profile .profile_details {
    display: flex;
    align-items: center;
  }
  .profile .profile_details img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 12px;
  }
  .profile .profile_details .name_job {
    margin-right: 30px;
  }
  .profile .profile_details .name {
    font-size: 15px;
    font-weight: 400;
  }
  .profile .profile_details .job {
    font-size: 12px;
  }
`;
