import React from 'react';
import PropTypes from 'prop-types';
 
const HeroCard = ({ id, secretIdentity, name, picture, universe }) => {
  return (
    <div className="hero-card">
      <img src={picture} alt={name} />
      <h2>{name}</h2>
      <p><strong>Identidade Secreta:</strong> {secretIdentity}</p>
      <p><strong>Universo:</strong> {universe}</p>
    </div>
  );
};
 
// Definindo o tipo das props
HeroCard.propTypes = {
  id: PropTypes.number.isRequired,
  secretIdentity: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  universe: PropTypes.string.isRequired,
};
 
export default HeroCard;