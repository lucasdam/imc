import { useState } from 'react';
import './app.css';

export default function App() {
  const [peso, setPeso] = useState(''); /* setState utiliado para o componente renderizar novamente */
  const [altura, setAltura] = useState('');
  const [mensagem, setMensagem] = useState('');

  function calcularIMC() {
    const alt = altura / 100;
    const imc = (peso / (alt * alt)).toFixed(2); /* toFixed() para mostrar apenas 2 casas decimais */

    if (imc < 18.6) {
      setMensagem(`Você está abaixo do peso! Seu IMC: ${imc}`) /* Seta em 'mensagem' essa frase */
    } else if (imc < 24.9) {
      setMensagem(`Peso ideal! Seu IMC: ${imc}`)
    } else if (imc < 34.9) {
      setMensagem(`Você está levemente acima do peso! Seu IMC: ${imc}`)
    } else if (imc >= 35) {
      setMensagem(`Cuidado! Obesidade! Seu IMC: ${imc}`)
    }

  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input 
          type="text"
          placeholder="Peso em (kg) Ex: 90"
          value={peso}
          onChange={ (e) => setPeso(e.target.value)} /* Acessa o que o usuário está digitando e muda o valor */
        />
        <input 
          type="text"
          placeholder="Altura em (cm) Ex: 180"
          value={altura}
          onChange={ (e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}> {/* Ao clicar, chama a função que irá calcular */}
          Calcular
        </button>
      </div>

      <h2>{mensagem}</h2> {/* Irá mostrar em tela o que tem em 'mensagem' */}
    </div>
  )
}