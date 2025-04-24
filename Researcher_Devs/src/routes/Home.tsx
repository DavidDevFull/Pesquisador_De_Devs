import { UserProps } from "../types/user";

import { Search } from "../components/Search";

import { useState } from "react";

export const Home = () => {
const[user, setUser] = useState<UserProps | null>(null); // Recebe um objeto com informações, caso Search não tenh valor será Null.

const loadUser = async(userName: string) => { // Retorno de uma Promise
    const res = await fetch(`https://api.github.com/users/${userName}`); // Pausa na função.

    const data = await res.json(); // Convertido em JSON para o consumo

    console.log(data);

    const {avatar_Url, login, location, followers, following} = data; // Os valores do objeto será recebido pelos objetos convertidos pelo Json.

    const userData:UserProps = {
    avatar_Url, 
    login, 
    location, 
    followers, 
    following,
    }

    setUser(userData);
}

    return( // Retorno dos valores
        <div>
            <Search loadUser={loadUser}/> {/*Componente que recebe a função de carregamento de usuário*/}
            {user && <p>{user.login}</p>}
            {user && <img src={user.avatar_Url}/>}
            {user &&  <p>{user.location}</p>}
            {user &&  <p>{user.followers}</p>}
            {user &&  <p>{user.following}</p>}
        </div>  
    )
}
