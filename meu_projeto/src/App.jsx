import './App.css'
import SayMyName from"./components/SayMyName"
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form'
import UseState from './components/UseState'


function App() {

  return (
    <>
    <h1>Testando eventos</h1>
    <Evento numero = "1"/>
    <Form/>
    <UseState/>
    </>
  )
}

export default App
