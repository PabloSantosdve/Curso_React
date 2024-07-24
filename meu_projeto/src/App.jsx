import './App.css'
import SayMyName from"./components/SayMyName"
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'


function App() {

  return (
    <>
    <h1>Testando CSS</h1>
    <SayMyName nome="Pablão" />
    <SayMyName nome= "Joao"  />
    <Pessoa  
    nome="Pablo"
    idade = "21"
    profissao = "Programador"
    foto = "https://via.placeholder.com/150" />

    <Frase/>
    <Frase/>
    <List/>

    </>
  )
}

export default App
