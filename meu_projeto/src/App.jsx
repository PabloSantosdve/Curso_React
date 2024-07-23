import './App.css'
import SayMyName from"./components/SayMyName"
import Pessoa from './components/Pessoa'
function App() {

  return (
    <>
    <SayMyName nome="Pablão" />
    <SayMyName nome= "Joao"  />
    <Pessoa  
    nome="Pablo"
    idade = "21"
    profissao = "Programador"
    foto = "https://via.placeholder.com/150" />
    </>
  )
}

export default App
