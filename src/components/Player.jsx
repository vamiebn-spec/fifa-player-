import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({
  nom = "Joueur Inconnu",
  equipe = "Équipe Inconnue",
  nationalite = "Nationalité Inconnue",
  numeroMaillot = 0,
  age = 18,
  imageUrl = "https://via.placeholder.com/300x300?text=Joueur+FIFA"
}) => {
  const cardStyle = {
    width: '18rem',
    margin: '15px',
    border: '2px solid #d4af37',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    backgroundColor: '#1e272e',
    color: '#ffffff',
    overflow: 'hidden'
  };

  const imageStyle = {
    height: '260px',
    objectFit: 'cover',
    borderBottom: '2px solid #d4af37'
  };

  const titleStyle = {
    color: '#d4af37',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '12px'
  };

  const textStyle = {
    fontSize: '0.95rem',
    lineHeight: '1.6'
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={nom} style={imageStyle} />
      <Card.Body>
        <Card.Title style={titleStyle}>{nom}</Card.Title>
        <Card.Text style={textStyle}>
          <strong>Équipe :</strong> {equipe} <br />
          <strong>Nationalité :</strong> {nationalite} <br />
          <strong>Numéro de maillot :</strong> {numeroMaillot} <br />
          <strong>Âge :</strong> {age} ans
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
