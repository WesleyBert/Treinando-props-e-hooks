import Home from "./components/HomePage/Home";
import Task from "./components/Task/Task";

function App() {
  return (
    <>
      <Task />
      <Home nome="wesley" descricao="aluno gen" ano={1999} />
    </>
  )
}

export default App
