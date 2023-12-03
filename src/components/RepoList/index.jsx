import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson)
            }, 500);
        })
    }, [nomeUsuario])

    return (
        <div className="container">
        {estaCarregando ? (
            <h1>Carregando...</h1>
        ) : (
        <ul className={styles.list}>
            {repos.map(repositorio => (
                //ou desestruturado:
                //
            //  {repos.map(({ id, name, language, html_url }) => (
                // <li key={id}>
                //     <b>Nome:</b> {name}<br/>
                //     <b>Linguagem:</b> {language} <br/>
                //     <a target="_blank" href={html_url}>Visitar no GitHub</a>
                //     <br/><br/>
                // </li>
            //  ))}
                <li className={styles.listItem} key={repositorio.id}>
                    <div className={styles.itemName}>
                        <b>Nome:</b> {repositorio.name}<br/>
                    </div>
                    <div className={styles.itemLanguage}>
                        <b>Linguagem:</b> {repositorio.language} <br/>
                    </div>
                    <div className={styles.itemLink}>
                        <a target="_blank" href={repositorio.html_url}>Visitar no GitHub</a>
                    </div>
                </li>
            ))}
        </ul>
        )}
        </div>
    )
}

export default ReposList;