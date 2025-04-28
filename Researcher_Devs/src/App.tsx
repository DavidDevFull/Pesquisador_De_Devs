import { Outlet } from "react-router"; // Atualiza o conteudo conforme a ação do usuário.

import classes from "./App.module.css";

export const App = ()=> {

  return (
    <div className={classes.app}>
        <h1>Github finder</h1>
        <Outlet/>
    </div>
    
  );
}

