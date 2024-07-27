import Button from './evento/Button'

function Evento({numero}){

	function meuEvento(){
		window.alert(`Ativando o primeiro evento`)
	}
	function SegundoEvento(){
		window.alert(`Ativando o segundo evento`)
	}
	return(
		<div>
			<p>Clique para disparar um evento:</p>
			<Button event={meuEvento} text="Primeiro evento" />
			<Button event={SegundoEvento} text="Segundo evento" />

		</div>
	)
}

export default Evento