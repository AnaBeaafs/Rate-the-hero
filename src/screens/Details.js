import React from 'react';
import { useParams } from 'react-router-dom';
import { useHero } from '../hooks/useHero'; // Importando o hook customizado
import styled from 'styled-components';
 
const Container = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
 
const Details = () => {
  const { heroId } = useParams(); // Capturando o ID do herói da URL
  const { hero, loading, error } = useHero(heroId); // Usando o hook para buscar detalhes do herói
 
  if (loading) return <div>Carregando detalhes do herói...</div>; // Estado de carregamento
  
  if (error) return <div>Erro ao carregar detalhes do herói.</div>; // Tratamento de erro
 
  return (
    <Container>
      <h1>{hero.name}</h1>
      <img src={hero.image} alt={hero.name} />
      <p>{hero.description}</p>
      {/* Adicione mais campos como poderes, histórias, etc., se necessário */}
    </Container>
  );
};