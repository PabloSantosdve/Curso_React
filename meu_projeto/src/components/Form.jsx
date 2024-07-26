import { useState } from "react"

function Form(){
	function cadastrar(event){
		event.preventDefault()
		console.log(name)
		console.log('Cadastrou o usúario!')
	}

	const [name, setName] = useState('Pablo')
	const [password, setPassword] = useState()
 
	return(
		<div>
			<h1>Meu Cadastro</h1>

			<form onSubmit={cadastrar}>
				<div>
					<label htmlFor="name">Nome:</label>
					<input type="text" 
					name="name"
					id="name"
					placeholder="Digite o seu nome"
					onChange={(event) => setName(event.target.value)}  />
				</div>

				<div>
					<label htmlFor="password">Senha:</label>
					<input type="password" 
					name="password" 
					id="password" 
					placeholder="Digite o sua senha"
					onChange={(event) => setPassword(event.target.value)}  />
				</div>
				<div>
					<input type="submit" value="Cadastrar" />
				</div>

				<div>
					<p>O usuario foi cadastrado com sucesso {name} com a senha {password}</p>
				</div>
			</form>

		</div>
	)

}

export default Form