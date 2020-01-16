import React, {useState} from 'react';
import Header from './Header'
// Componente 
  // Funçao que retorna um HTML. Ex.: function APP() abaixo.
  // Bloco isolado de HTML, CSS e JS que não interfere no restante da aplicação.

// Estado
  // Informações mantidas pelo componente (Imutabilidade)
  // useState.

// Propriedade
  // title="Dashboard"
  // Informações que um componete PAI passa para o filho (parâmetros para o componente.)

function App() {

  const [counter, setCounter] = useState(0);

  function incrementCounter(){
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
      <Header title="Dashboard"/> 
      <Header title="Dashboard 2"/> 
      <Header title="Dashboard 3"/> 
    </>
  );
}

export default App;
