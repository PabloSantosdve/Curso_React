function Form(){
	function cadastrar(e){
		e.preventDefault()
		let nome = document.getElementById('nome')
		window.alert('Cadastrou o usuario' + nome)
	}
	return(
		<div>
			<h1>Meu Cadastro</h1>
			<form onSubmit={cadastrar}>
				<div>
					<input type="text" name="" id="nome" placeholder="Digite o seu nome"/>
				</div>
				<div>
					<input type="submit" value="Cadastrar" />
				</div>
			</form>

		</div>
	)

}

export default Form