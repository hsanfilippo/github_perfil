import { useEffect, useState } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("o componente iniciou");

        return () => {
            console.log("o componente finalizou");
        }
    })

    useEffect(() => {
        console.log("O estado nome mudou");
    }, [nome]);

    useEffect(() => {
        console.log("Matéria A mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC])

    const renderizaResultado = () => {
        const soma = parseInt(materiaA) + parseInt(materiaB) + parseInt(materiaC)
        const media = soma / 3;
        if (media >= 7) {
            return (
                <p>
                    {nome}, você foi aprovado!<br/>
                    Sua média para aprovação é de: {Math.floor(media)}
                </p>
            )
        } else {
            return (
                <p>{nome}, você foi reprovado... :/</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[12,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="nome" onChange={e => setNome(e.target.value)}></input>
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(evento.target.value)} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(evento.target.value)} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(evento.target.value)} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;