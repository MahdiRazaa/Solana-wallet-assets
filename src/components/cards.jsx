import React from "react";
import Sol from "../assets/images/sol.jpeg";
import Ton from "../assets/images/Ton.jpeg";
import Bitcoin from "../assets/images/bitcoin.png";
import BNB from "../assets/images/BNB.png";
import ETH from "../assets/images/ETH.png";
import Ada from "../assets/images/Ada.jpeg";
import Tron from "../assets/images/Tron.png";

const coinData = [
  { name: "Bitcoin", image: Bitcoin, coins: 14 },
  { name: "Ethereum", image: ETH, coins: 10 },
  { name: "Solana", image: Sol, coins: 15 },
  { name: "BNB", image: BNB, coins: 8 },
  { name: "Tron", image: Tron, coins: 13 },
  { name: "Ada", image: Ada, coins: 17 },
  { name: "Ton", image: Ton, coins: 20 },
];

function Cards() {
  return (
    <div className="cards-section">
      {coinData.map((coin, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={coin.image} width="30px" alt={`${coin.name}-coin-image`} />
            <p>{coin.name}</p>
            <p>{coin.coins} coins</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
