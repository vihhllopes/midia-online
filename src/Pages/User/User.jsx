import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Dashboard } from "../../Styles/Dashboard";
import Button from "react-bootstrap/Button";
import { BsSearch, BsFillGridFill, BsFillPersonFill } from "react-icons/bs";
import MlateralUser from "../../Components/Menu/User/MenuLateralUser";
import Table from "react-bootstrap/Table";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [data, setData] = useState([]);

  const { signout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const db_costumer = localStorage.getItem("users_bd")
      ? JSON.parse(localStorage.getItem("users_bd"))
      : [];
    setData(db_costumer);
  }, [setData]);

  return (
    <div>
      <div>
        <Row className="m-0">
          <Col xs={2} md={2}>
            <MlateralUser />
          </Col>
          <Col>
            <Dashboard className="dashboard">
              <Row>
                <Col>
                  <div className="search">
                    <Form.Control
                      className="input"
                      type="text"
                      placeholder="Pesquise"
                      readOnly
                    />{" "}
                    <Button className="button-search" href="/cadastro">
                      <BsSearch />
                    </Button>
                  </div>
                </Col>{" "}
                <Col>
              <div>
                  <button onClick={() => [signout(), navigate("/")]}>
                    sair
                  </button>
                  
                </div></Col>
              </Row>
              <div className="dash-content">
                <div className="activity">
                  <div className="title">
                    <BsFillPersonFill />
                    <span className="text">Lista de Usuarios</span>
                  </div>
                  <div className="activity-data">
                    <Table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Email</th>
                          <th>CPF</th>
                          <th>Telefone</th>
                          <th>Cargo</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map(
                          (
                            {
                              name,
                              email,
                              telefone,
                              cpf,
                              sobrenome,
                              cargo,
                              senha,
                            },
                            index
                          ) => (
                            <tr key={index} cursor="pointer">
                              <td>
                                {name} {sobrenome}
                              </td>

                              <td>{email}</td>
                              <td>{senha}</td>
                              <td>{cpf}</td>
                              <td>{telefone}</td>
                              <td>{cargo}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </Dashboard>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default User;
