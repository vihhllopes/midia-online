import React, { useEffect, useState } from "react";
import Mlateral from "../../Components/Menu/Adm/MenuLateral";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Dashboard } from "../../Styles/Dashboard";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import {
  BsSearch,
  BsFillGridFill,
  BsFillPersonFill,
  BsFillPencilFill,
  BsXLg,
} from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { FaShare, FaComments } from "react-icons/fa";
import Cadastro from "../../Components/Controle/Cadastro";
import { useDisclosure } from "@chakra-ui/react";
import useAuth from "../../hooks/useAuth";

export default function Adm() {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState([]);

  useEffect(() => {
    const db_costumer = localStorage.getItem("users_bd")
      ? JSON.parse(localStorage.getItem("users_bd"))
      : [];
    setData(db_costumer);
  }, [setData]);

  //remover usuario
  const handleRemove = (email) => {
    const newArray = data.filter((item) => item.email !== email);

    setData(newArray);

    localStorage.setItem("users_bd", JSON.stringify(newArray));
  };

  return (
    <div>
      <Row className="m-0">
        <Col xs={2} md={2}>
          <Mlateral />
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
                  <button onClick={() => [setDataEdit({}), onOpen()]}>
                    Criar Usuario
                  </button>
                </div>
              </Col>
              <Col>
                <div>
                  <button onClick={() => [signout(), navigate("/")]}>
                    sair
                  </button>
                </div>
              </Col>
            </Row>

            <div className="dash-content">
              <div className="overview">
                <div className="title">
                  <BsFillGridFill />
                  <span className="text">Dashboard</span>
                </div>

                <div className="boxes">
                  <div className="box box1">
                    <AiFillLike />
                    <span className="text">Total Likes</span>
                    <span className="number">50,120</span>
                  </div>
                  <div className="box box2">
                    <FaComments />
                    <span className="text">Comments</span>
                    <span className="number">20,120</span>
                  </div>
                  <div className="box box3">
                    <FaShare />
                    <span className="text">Total Share</span>
                    <span className="number">10,120</span>
                  </div>
                </div>
              </div>

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
                        <th>Senha</th>
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
                            <td>
                              <BsFillPencilFill
                                onClick={() => [
                                  setDataEdit({
                                    name,
                                    email,
                                    telefone,
                                    cpf,
                                    sobrenome,
                                    cargo,
                                    index,
                                  }),
                                  onOpen(),
                                ]}
                              />
                            </td>
                            <td>
                              <BsXLg onClick={() => handleRemove(email)} />
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
            {isOpen && (
              <Cadastro
                isOpen={isOpen}
                onClose={onClose}
                data={data}
                setData={setData}
                dataEdit={dataEdit}
                setDataEdit={setDataEdit}
              />
            )}
          </Dashboard>
        </Col>
      </Row>
    </div>
  );
}
