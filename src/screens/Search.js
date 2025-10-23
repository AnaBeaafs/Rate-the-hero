import React, { useState } from 'react';
import { useHeroes } from '../hooks/useHeroes'; // Importando o hook customizado
 
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { heroes, loading, error } = useHeroes(searchTerm); // Usando o hook para buscar heróis
 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Atualiza o termo de busca
  };
 
  if (loading) return <div>Carregando...</div>; // Estado de carregamento
 
  if (error) return <div>Erro ao buscar os heróis.</div>; // Tratamento de erro
 
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Buscar heróis"
      />
      <ul>
        {heroes.map(hero => (
          <li key={hero.id}>{hero.name}</li> // Lista de heróis encontrados
        ))}
      </ul>
    </div>
  );
};
 
export default Search;