import React, { useState } from 'react';
import './RomanticCard.css';

const RomanticCard = () => {
  const [isFrench, setIsFrench] = useState(true);

  const toggleLanguage = () => {
    setIsFrench(!isFrench);
  };

  return (
    <div className="card-container">
      <div className="card-content" onClick={toggleLanguage} onMouseEnter={toggleLanguage} onMouseLeave={toggleLanguage}>
        <h1 className="card-title">
          {isFrench ? "Pour Mon Amour" : "Para Mi Amor"}
        </h1>
        <p className="card-date">
          {isFrench ? "18 novembre 2024 - Un an et huit mois ensemble" : "18 de noviembre 2024 - Un año y ocho meses juntos"}
        </p>
        <p className="card-poem">
          {isFrench
            ? `Tu es un rayon de lumière qui éclaire mes jours,
avec tes cheveux dorés comme le soleil dans le ciel,
et tes yeux verts, deux émeraudes qui brillent toujours,
où je me perds et trouve la paix et le miel.

Ton visage, une œuvre d'art, si parfait et doux,
et chaque sourire, une raison pour rêver,
tu es plus que belle, tu es mon ciel et ma terre,
l'inspiration qui me fait chaque jour m'envoler.`
            : `Eres un rayo de luz que ilumina mis días,
con tu cabello dorado como el sol en el cielo,
y esos ojos verdes, dos esmeraldas vivas,
donde me pierdo y encuentro paz y consuelo.

Tu rostro, una obra de arte, tan perfecto y sereno,
y cada sonrisa tuya, una razón para soñar,
eres más que hermosa, eres mi cielo y mi terreno,
la inspiración que me hace cada día volar.`}
        </p>
        <p className="card-signature">
          {isFrench ? "-Avec tout mon amour, Le Petit Taupe" : "-Con todo mi amor, Topito"}
        </p>
        <p className="card-instruction">
          Haz clic o hover para traducir el poema
        </p>
      </div>
    </div>
  );
};

export default RomanticCard;
