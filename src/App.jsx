import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

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
        <button>s Gerar Número Aleatório</button>
        <p>MOSRAR AQUI O NÚMERO ALEATÓRIO</p>
      </div>
    </>
  );
}

export default App;
