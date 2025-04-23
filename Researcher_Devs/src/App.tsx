import { Outlet } from "react-router";

export const App = ()=> {

  return (
    <div className="App">
        <h1>Github finder</h1>
        <Outlet/>
    </div>
    
  );
}

