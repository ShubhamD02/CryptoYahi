import React from "react";

const CryptoCard = ({ coin }) => {
  return (
    <div className="crypto-card">
      <img src={coin.image} alt={coin.name} className="crypto-image" />
      <h2>{coin.name}</h2>
      <p className="crypto-symbol">{coin.symbol.toUpperCase()}</p>
      <p className="crypto-price">${coin.current_price.toFixed(2)}</p>
    </div>
  );
};

export default CryptoCard;
