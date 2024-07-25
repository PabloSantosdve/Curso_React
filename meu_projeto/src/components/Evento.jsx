function Evento({numero}){

	function meuEvento(){
		window.alert(`obaaaaa ativou ${numero}`)
	}
	return(
		<div>
			<p>Clique para disparar um evento:</p>
			<button onClick={meuEvento} >Ativar!</button>
			<div id="escrita">

			</div>
		</div>
	)
}

export default Evento