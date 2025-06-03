import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1; 
    setRandomNumber(number);
  }

  return (
    <>
      <div>
        <h1>Olá meu nome é {name.trim() === "" ? "..." : name}</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Digite seu nome aqui"
          value={name}
        />
      </div>
      <div className="card">
        <button onClick={generateRandomNumber}>{randomNumber === null ? "Gerar Número Aleatório" : "Gerar outro Número..."}</button>
        <p>{randomNumber}</p>
      </div>
    </>
  );
}

export default App;
