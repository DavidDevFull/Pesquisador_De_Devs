import { Outlet } from "react-router"; // Atualiza o conteudo conforme a ação do usuário.

export const App = ()=> {

  return (
    <div className="App">
        <h1>Github finder</h1>
        <Outlet/>
    </div>
    
  );
}

