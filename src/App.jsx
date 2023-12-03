import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/RepoList";

function App() {
  const nome = "gian";
  const numX = 2;
  const numY = 5;

  function somaXY() {
    return numX + numY;
  }

  const pessoa = {
    nome: "Maria",
  }

  let estaDeDia = false;

  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <input type="text" onBlur={(e) => setFormularioEstaVisivel.nomeUsuario = setNomeUsuario(e.target.value)}></input>

      {nomeUsuario.length > 4 && (
        <>        
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && (
      <Formulario />
      )}
      
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Toggle Form</button> */}

    </>
  )
}

export default App
