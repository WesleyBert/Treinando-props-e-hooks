import { useState } from 'react'
import './Contador.css'

function Contador() {

  const [numero, setNumero] = useState(0);

  function maisUm() {
    setNumero(numero + 1);
  }
  return (
    <div className="container">
      <p>O valor é: {numero}</p>
      <button onClick={maisUm}>Adicionar +1</button>
    </div>
  )
}

export default Contador