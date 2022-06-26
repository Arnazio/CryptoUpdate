import React, { useState, useEffect } from 'react';
import './App.css';
import CryptoTool from './components/CryptoTool';

function App() {
  const API_KEY = "f6d4bb88-7285-4864-868b-232eca04920e"; 
  const [cryptoData, setCryptoData] = useState("");
  const coins = ["Ethereum", "Bitcoin", "XRP"]

  useEffect(() => {
      setInterval( async () => {
        try {
          const cryptoData = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
          const data = await cryptoData.json();
          setCryptoData(data);
        } catch (err) {
            console.log(err);
        }
      }, 1000) //kijk er is een last updated prop en de data is last updated 59, en tis nu al 3 na, dus ze zullen hun data om de 5 min syncen fzo
  }, [])
 
  return (
    <div className="app-container">
     

      {coins.map((coin, i) => {
        if(!cryptoData) {
          return <h3>spaceship still rendering...</h3>
        }
        else { return <CryptoTool coinName={coin} data={cryptoData.find(el => el.name == coin)} key={i} /> }
      })}
    </div>
  );
  
}


//er moet gwn een functie in die de page elke 10 sec refreshed, ehm ja setInterval in een useEffect gewoon in DE useEffect op deze pagina
export default App;
