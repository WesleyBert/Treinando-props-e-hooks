import { useEffect, useState } from "react";


interface minhasProps {
    nome: string;
    descricao: string;
    ano: number;
}


function Home(props: minhasProps) {
    const [teste, setTeste] = useState('');
    const [tarefa, setTarefa] = useState("")
    const [completar, setCompletar] = useState(false);
    const [loggin, setLogin] = useState(false)


    useEffect(() => {
        if (completar === true) {
            setTarefa("tarefa concluida")
        }
    }, [completar])


    function mudar() {
        setTeste(teste);
    }

    return (
        <>

            {loggin ?
                (<h1>Seja bem vindo!</h1>)
                : (
                    <button onClick={() => { setLogin(true) }}>Logar</button>
                )
            }


            <h1>{props.nome}</h1>
            <h2>{props.descricao}</h2>
            <h3>{props.ano}</h3>

            <p>vamos testar mude isso: {teste}</p>
            <button onClick={mudar}>click</button>


            <p>{tarefa}</p>
            <button onClick={() => { setCompletar(true) }}>click</button>
        </>
    )
}

export default Home