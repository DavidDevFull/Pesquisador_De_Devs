import { UserProps } from "../types/user";

import { useState } from "react"; 

import { Search } from "../components/Search"; 

import { User } from "../components/User";

import { Error } from "../components/Error";

export const Home = () => {
const[user, setUser] = useState<UserProps | null>(null); // Recebe um objeto com informações, caso Search não tenh valor será Null.
const[error, setError] = useState(false);

const loadUser = async(userName: string) => { // Retorno de uma Promise
    setError(false); // Inicio do valor de erro como falso para não ser chamado
    setUser(null); // Valor com o inicio vazio

    const res = await fetch(`https://api.github.com/users/${userName}`); // Pausa na função.

    const data = await res.json(); // Convertido em JSON para o consumo

    if(res.status === 404){ // Caso a resposta for invalida
        setError(true);
        return;
    }

    console.log(data);

    const {avatar_url, login, location, followers, following} = data; // Os valores do objeto será recebido pelos objetos convertidos pelo Json.

    const userData:UserProps = { // Recebe as propiedades de acordo com a API consumida
    avatar_url, 
    login, 
    location, 
    followers, 
    following,
    }

    setUser(userData);
}

    return( // Retorno dos valores
        <div>
            <Search loadUser={loadUser}/> {/* Componente que recebe a função de carregamento de usuário */}
            {user && <User {...user} />} {/* Obejeto que será compartilhado usando user UserProps */}
            {error && <Error />} {/* Obejeto que será compartilhado usando user UserProps */}
        </div>  
    )
}
