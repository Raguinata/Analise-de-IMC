import './App.css';
import { useState } from 'react';

function App() {
  function Classificação(evento) {
    evento.preventDefault()
    setValor(resultado)
  }

  const [resultado, setResultado] = useState()
  const [valor, setValor] = useState()


  let myText = '';
  if (valor < 18.5) {
    myText = <p>ABAIXO DO PESO</p>
  }
  else if (valor >= 18.5 && valor <= 24.9) {
    myText = <p>NORMAL</p>
  }
  else if (valor >= 25 && valor <= 29.9) {
    myText = <p>SOBREPESO</p>
  }
  else if (valor >= 30 && valor <= 34.9) {
    myText = <p>OBESIDADE GRAU I</p>
  }
  else if (valor >= 35 && valor <= 39.9) {
    myText = <p>OBESIDADE GRAU II</p>
  }
  else {
    myText = <p>OBESIDADE GRAU III</p>
  }

  return (
    <div className='divApp'>
      <form>
        <h1>Análise IMC</h1><br />
        <h2>IMC = peso/altura²</h2><br />
        <span>Realize o cálculo do IMC utilizando a fórmula acima e insira o resultado obtido no campo abaixo</span>
        <br />
        <br /><label>Informe seu IMC: </label>
        <input onChange={(evento) => setResultado(evento.target.value)} />
        <button type="submit" onClick={Classificação}>Analisar</button>
        {valor && (
          <div>
            <p className='pIMC'>IMC Informado: <br/>{valor}</p>
            <p className='pResultado'>Resultado: {myText}</p>
          </div>
        )}
      </form>
    </div>
  );

}

export default App;