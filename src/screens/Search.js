import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroCard from './HeroCard'; // Supondo que você tenha um componente HeroCard
 
const Search = () => {
  const [heroes, setHeroes] = useState([]);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [doSearch, setDoSearch] = useState(false);
 
  const fetchHeroes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://superheroapi.com/api/YOUR_ACCESS_TOKEN/search/${value}`);
      setHeroes(response.data.results); // Ajuste conforme a estrutura da API
    } catch (error) {
      console.error('Erro ao buscar heróis', error);
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    if (doSearch) {
      fetchHeroes();
      setDoSearch(false); // Reseta a busca após buscar os heróis
    }
  }, [doSearch]);
 
  const handleSearch = () => {
    setDoSearch(true);
  };
 
  return (
    <div>
      <h1>Busque um Herói</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Digite o nome do herói"
      />
      <button onClick={handleSearch}>Buscar</button>
 
      {loading && <p>Carregando...</p>}
      <div>
        {heroes.map(hero => (
          <HeroCard
            key={hero.id}
            id={hero.id}
            secretIdentity={hero.biography['full-name']}
            name={hero.name}
            picture={hero.image.url}
            universe={hero.biography.publisher}
          />
        ))}
      </div>
    </div>
  );
};
 
export default Search;