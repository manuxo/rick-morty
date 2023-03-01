import { useState } from 'react';
import { Outlet } from "react-router-dom";
import './App.css';

function App() {
  const [characters, setCharacters] = useState(null);
  const findCharacters = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  };
  const context = {
    characters,
    onSearch: findCharacters
  };
  return (
    <div className="App">
      <header className="App-header">
        <Outlet context={context}/>
      </header>
    </div>
  );
}

export default App;
