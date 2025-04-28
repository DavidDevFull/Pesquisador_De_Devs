type SearchProps = {
    loadUser: (userName: string) => Promise<void>; 
};


import classes from "./Search.module.css";

import { useState, KeyboardEvent} from "react"; // Importando evento de teclado e estado

import { BsSearch } from "react-icons/bs"; // importando icones

export const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState("");

    const handleKeyDown = (e: KeyboardEvent) => { // Função de interação com o teclado
        if(e.key === "Enter"){
            loadUser(userName)
        }
    }

    return (
        <div className={classes.search}>
            <h2> Busque por um usuário: </h2>
            <p>Conheça os melhores repositórios</p>
            <div className={classes.search_Container}>
                <input type="text" 
                placeholder="Digite o nome do usuário..." 
                onChange={(e)=> setUserName(e.target.value)}
                onKeyDown={handleKeyDown}
                />
                <button onClick={()=> loadUser(userName)}>
                    <BsSearch />
                    </button>
            </div>
        </div>
    );
}
