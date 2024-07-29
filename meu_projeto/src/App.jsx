import './App.css'
import RenderizacaodeListas from './components/RenderizacaodeListas'




function App() {

  const meusItens= ['React', 'Vue', 'Angular']

  return (
    <>
    <h1>Renderização de listas</h1>
    <RenderizacaodeListas itens ={meusItens} />
    <RenderizacaodeListas itens ={[ ]} />

    </>
  )
}

export default App
