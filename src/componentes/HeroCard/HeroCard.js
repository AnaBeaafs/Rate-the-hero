import React from 'react';
import styled from 'styled-components';
 
const Card = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
 
const HeroCard = ({ hero }) => {
  return (
    <Card>
      <h2>{hero.name}</h2>
      <img src={hero.image} alt={hero.name} />
      <p>{hero.description}</p>
    </Card>
  );
};