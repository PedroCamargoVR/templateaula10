import React, { useState } from 'react';
import Header from "./components/header";
import Login from "./pages/Login"; // Cpmponente de Login importado
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // lógica de autenticação.
    // Se a autenticação for bem-sucedida, defina isAuthenticated como true.
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      <Header />
      {isAuthenticated ? <ListarTarefa /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;