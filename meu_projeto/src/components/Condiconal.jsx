import { useState } from "react"

function Condicional() {
	// Declara dois estados: 'email' para armazenar o valor do input e 'userEmail' para armazenar o email enviado
	const [email, setEmail] = useState('') 
	const [userEmail, setUserEmail] = useState('')

	// Função chamada quando o botão "Enviar email" é clicado
	function enviarEmail(e) {
		e.preventDefault() // Previne o comportamento padrão do formulário de recarregar a página
		setUserEmail(email) // Atualiza o estado 'userEmail' com o valor do estado 'email'
	}

	// Função chamada quando o botão "Limpar email" é clicado
	function limparEmail() {
		setUserEmail('') // Limpa o estado 'userEmail' ao definir um valor vazio
	}

	return (
		<div>
			<h2>Cadastre seu email:</h2>
			
			{/* Formulário para capturar o email */}
			<form action="">
				<label htmlFor="">Digite seu email</label>
				
				{/* Input para capturar o email do usuário */}
				<input 
					type="email" 
					name="" 
					id="" 
					placeholder="Email..." 
					// Atualiza o estado 'email' toda vez que o valor do input muda
					onChange={(e) => setEmail(e.target.value)} 
				/>
				
				{/* Botão para enviar o email */}
				<button onClick={enviarEmail}>Enviar email</button>
			</form>
			
			{/* Renderiza esta seção apenas se 'userEmail' tiver um valor */}
			{userEmail && (
				<div>
					<p>O e-mail do usuário é: {userEmail}</p>
					
					{/* Botão para limpar o email */}
					<button onClick={limparEmail}>Limpar email</button>
				</div>
			)}
		</div>
	)
}

export default Condicional
