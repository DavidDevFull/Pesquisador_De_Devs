import { UserProps } from "../types/user";

import { MdLocationPin } from "react-icons/md"; // Importando icones

import { Link } from "react-router-dom"; // navegação entre paginas

import classes from "./User.module.css"; // React modules

export const  User = ({login, avatar_url, followers ,following, location}: UserProps) => {
    return(
        <div className={classes.user}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {location && (
              <p className={classes.location}><MdLocationPin /> <span>{location}</span></p>
            )}
            <div className={classes.states}>
              <div>
                <p className={classes.number}>Seguidores: {followers}</p>
              </div>
              <div>
                <p className={classes.number}>Seguindo: {following}</p>
              </div>
            </div>
              <Link to={`/repos/${login}`}>🌟 Melhores projetos ❗</Link>
            </div>
    )
}