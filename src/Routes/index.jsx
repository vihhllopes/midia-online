import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../Components/Controle/Cadastro";
import useAuth from "../hooks/useAuth";
import LoginUser from "../Pages/Acesso/LoginUser";
import LoginAdm from "../Pages/Acesso/LoginAdm";
import Adm from "../Pages/Adm/Adm";
import Home from "../Pages/Home/Home";
import User from "../Pages/User/User";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <LoginUser />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/adm" element={<Adm />} />
          <Route path="/user" element={<Private Item={User} />} />
          <Route path="/" element={<Home />} />
          <Route path="/loginuser" element={<LoginUser />} />
          <Route path="/*" element={<LoginUser />} />
          <Route path="/loginadm" element={<LoginAdm />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
