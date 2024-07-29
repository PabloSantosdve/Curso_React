import React from 'react';

// Define a função RenderizacaodeListas que recebe um objeto com a propriedade 'itens'
function RenderizacaodeListas({ itens }) {
  return (
    // Fragmento React (<> </>) usado para agrupar os elementos sem adicionar um nó extra ao DOM
    <>
      {/* Cabeçalho da lista */}
      <h3>Lista de coisas boas:</h3>
      
      {/* Renderização condicional ternária */}
      {itens.length > 0 ? (
        // Se houver itens, mapeia cada item da lista 'itens' para um elemento <p>
        itens.map((item, index) => (
          // Exibe o item dentro de um parágrafo <p>
          // Adiciona a chave (key) para cada item, usando o índice do item na lista, para identificar de forma única cada elemento
          <p key={index}>{item}</p>
        ))
      ) : (
        // Se não houver itens, exibe uma mensagem dizendo que a lista está vazia
        <p>A lista está vazia!</p>
      )}
    </>
  );
}

// Exporta a função RenderizacaodeListas para que ela possa ser importada e utilizada em outros arquivos
export default RenderizacaodeListas;
