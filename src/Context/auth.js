import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});



export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  //================BANCO USERS ========================//
 
  useEffect(() => {
    const db_costumer = localStorage.getItem("users_bd")
      ? JSON.parse(localStorage.getItem("users_bd"))
      : [];
      setUser(db_costumer);
  }, [setUser]);
  

//================LOGIN USER ========================//


  const signin = (email, senha) => {
     // resgatar os dados
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
// filtrar os dados
    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].senha === senha) {
        setUser({ email, senha }); 
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };





//================ACESSO ADM ========================//
const signinAdm = (email, senha) => {
    // resgatar os dados
  const usersStorage = JSON.parse(localStorage.getItem("adm"));
 // filtrar os dados
  const hasAdm = usersStorage?.filter((user) => user.email === email);

  if (hasAdm?.length) {
    if (hasAdm[0].email === email && hasAdm[0].senha === senha) {
      setUser({ email, senha }); 
    } else {
      return "E-mail ou senha incorretos";
    }
  } else {
    return "Usuário não cadastrado";
  }
};

//================BANCO ADM ========================//
  const arr = [{email:"midiaonline@gmail.com", senha:"midiaonline"}];

    // salvar dados
    localStorage.setItem("adm", JSON.stringify(arr));
    // resgatar os dados
    const itens = JSON.parse(localStorage.getItem("adm"));
  
    console.log(itens);



//================CADASTRO USER ========================//

  //Cadastro
  const signup = (name,email, senha,sobrenome,telefone,cpf,cargo) => {
    const usersStorage = JSON.parse(localStorage.setItem("users_bd"));

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { name,email,senha,sobrenome,telefone,cpf,cargo}];
    } else {
      newUser = [{ name,email,senha,sobrenome,telefone,cpf,cargo}];
    }

    localStorage.setItem("users_bd", JSON.stringify(newUser));

    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin,signup,signinAdm,signout}}
    >
      {children}
    </AuthContext.Provider>
  );
};
