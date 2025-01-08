import React, { useState, useEffect } from "react";
import axios from "axios";
import CryptoCard from "./components/CryptoCard";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCryptoData = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
        );
        setCoins(response.data);
      } catch (err) {
        setError("Failed to fetch cryptocurrency data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div className="app">
      <h1>Crypto Price Tracker</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="crypto-container">
        {coins.map((coin) => (
          <CryptoCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default App;
