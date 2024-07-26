import { useState } from 'react';

// Define um componente funcional chamado MyComponent
function MyComponent() {
  // Declara uma variável de estado 'name' e uma função 'setName' para atualizá-la, inicializando 'name' com uma string vazia
  const [name, setName] = useState('');

  // Função que será chamada quando o valor do campo de texto mudar
  const handleChange = (event) => {
    // Atualiza o valor de 'name' com o valor atual do campo de texto
    setName(event.target.value);
  };

  return (
    <div>
      {/* Campo de texto controlado. O valor do campo é o estado 'name'. Quando o valor muda, 'handleChange' é chamado */}
      <input type="text" value={name} onChange={handleChange} />
      {/* Exibe uma saudação usando o valor atual de 'name' */}
      <p>Hello, {name}!</p>
    </div>
  );
}

// Exporta o componente para que possa ser usado em outros arquivos
export default MyComponent;
