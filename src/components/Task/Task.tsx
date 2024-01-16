import { useEffect, useState } from 'react'
import './Task.css'

function Task() {

  const [completar, setCompletar] = useState(false);
  const [tarefa, setTarefa] = useState("")

  useEffect(() => {
    if (completar == true){
      setTarefa("Tarefa concluida")
    }
  }, [completar])

  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status da Tarefa</h3>
      <button onClick={ () => { setCo(true) }} >Conclua a Tarefa: { tarefa }</button>
    </div>
  )
}

export default Task