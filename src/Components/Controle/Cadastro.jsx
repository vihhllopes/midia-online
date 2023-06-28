import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useAuth from "../../hooks/useAuth";
import { Dashboard } from "../../Styles/Dashboard";

const Cadastro = ({ data, setData, dataEdit, isOpen, onClose }) => {
  const [name, setName] = useState(dataEdit.name || "");
  const [senha, setSenha] = useState(dataEdit.senha  || "");
  const [email, setEmail] = useState(dataEdit.email || "");
  const [sobrenome, setSobrenome] = useState(dataEdit.sobrenome || "");
  const [telefone, setTelefone] = useState(dataEdit.telefone || "");
  const [cpf, setCpf] = useState(dataEdit.cpf || "");
  const [cargo, setCargo] = useState(dataEdit.cargo || "");
  const [error, setError] = useState("");

  const { signup } = useAuth();

  const handleSave = () => {
    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = {
        name,
        email,
        sobrenome,
        cpf,
        telefone,
        cargo,
        senha
      };
    }

    if (emailAlreadyExists()) {
      return alert("Email Já Cadastrado!");
     
    }
    const newDataArray = !Object.keys(dataEdit).length
      ? [
          ...(data ? data : []),
          { name, email, sobrenome, cpf, telefone, cargo, senha },
        ]
      : [...(data ? data : [])];

      

    localStorage.setItem("users_bd", JSON.stringify(newDataArray));
    setData(newDataArray);

    onClose();

    const res = signup(name, email, sobrenome, cpf, telefone, cargo, senha);
    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    onClose();
  };

  const emailAlreadyExists = () => {
    if (dataEdit.email !== email && data?.length) {
      return data.find((item) => item.email === email);
    }
    return false;
  };

  return (
    <>
      <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Dashboard>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      placeholder="Nome"
                      aria-describedby="inputGroupPrepend"
                      type="text"
                      name="firstName"
                      value={name}
                      onChange={(e) => [setName(e.target.value), setError("")]}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationFormik02">
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control
                      placeholder="Sobrenome"
                      aria-describedby="inputGroupPrepend"
                      type="text"
                      name="lastName"
                      value={sobrenome}
                      onChange={(e) => [
                        setSobrenome(e.target.value),
                        setError(""),
                      ]}
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormikUsername"
                  >
                    <Form.Label>CPF</Form.Label>

                    <Form.Control
                      type="text"
                      placeholder="Cpf"
                      aria-describedby="inputGroupPrepend"
                      name="cpf"
                      value={cpf}
                      onChange={(e) => [setCpf(e.target.value), setError("")]}
                    />
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md="3" controlId="validationFormik04">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Telefone"
                      name="Telefone"
                      value={telefone}
                      onChange={(e) => [
                        setTelefone(e.target.value),
                        setError(""),
                      ]}
                    />
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationFormik05">
                    <Form.Label>Cargo</Form.Label>
                    <Form.Select
                      value={cargo}
                      onChange={(e) => [setCargo(e.target.value), setError("")]}
                      aria-label="Default select example"
                    >
                      <option>Cargo</option>
                      <option value="Gerente de Marketing">
                        {" "}
                        Gerente de Marketing
                      </option>
                      <option value="Especialista em E-commerce">
                        {" "}
                        Especialista em E-commerce
                      </option>
                      <option value="Gerente de Contas">
                        Gerente de Contas
                      </option>
                      <option value="Especialista Web">Especialista Web</option>
                    </Form.Select>

                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationFormik03">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Email"
                      name="Email"
                      value={email}
                      onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />
                  </Form.Group>

                  <Form.Group as={Col} md="3" controlId="validationFormik04">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Senha"
                      name="Senha"
                      value={senha}
                      onChange={(e) => [setSenha(e.target.value), setError("")]}
                    />
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row  xs={5} md={7} lg={18}>
                  <Col>
                    {" "}
                    <button
                      onClick={handleSave}
                      className="button-modal"
                      type="submit"
                    >
                      Salvar
                    </button>
                  </Col>
                  <Col>
                    {" "}
                    <button
                      onClick={onClose}
                      className="button-modal"
                      type="submit"
                    >
                      Cancelar
                    </button>
                  </Col>
                </Row>
              </Form>
            </Dashboard>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Cadastro;
