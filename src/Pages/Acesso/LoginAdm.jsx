import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import React, { createContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import { AcessoStyles } from "../../Styles/Login";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LoginAdm = () => {
  const { signinAdm } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");




  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signinAdm(email, senha);

    //caso for user
    if (res) {
      setError(res);
      return;
    }

    navigate("/adm");
  };
 

  return (
    <header>
      <>
        <AcessoStyles>
          <div className="container">
            <div className="box">
              <Card className="card-adm">
                <Card.Img variant="top" className="100px180" />
                <Card.Body>
                  <Card.Text align="center">
                    <div className="form-title">LOGIN ADM</div>
                  </Card.Text>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Form.Text className="error">{error}</Form.Text>
                    <Button
                      className="button-adm"
                      variant="primary"
                      onClick={handleLogin}
                    >
                      <Link className="linkButton">Submit</Link>
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </div>
        </AcessoStyles>
        <br />
      </>
    </header>
  );
};
export default LoginAdm;
