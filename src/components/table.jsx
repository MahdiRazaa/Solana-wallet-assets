import React from 'react';
import Ada from "../assets/images/Ada.jpeg";
import Bitcoin from "../assets/images/bitcoin.png";
import BNB from "../assets/images/BNB.png";
import ETH from "../assets/images/ETH.png";
import Tron from "../assets/images/Tron.png";

const transactionData = [
  {
    icon: BNB,
    name: "BNB",
    type: "Buy",
    quantity: 5,
    amount: 2658,
    date: "5-7-2023",
  },
  {
    icon: Ada,
    name: "Ada",
    type: "Sell",
    quantity: 4,
    amount: 2560,
    date: "2-1-2024",
  },
  {
    icon: Bitcoin,
    name: "Bitcoin",
    type: "Buy",
    quantity: 5,
    amount: 1700,
    date: "2022-01-01",
  },
  {
    icon: ETH,
    name: "Ethereum",
    type: "Sell",
    quantity: 4,
    amount: 23445,
    date: "6-8-2023",
  },
  {
    icon: Tron,
    name: "Tron",
    type: "Buy",
    quantity: 5,
    amount: 22003,
    date: "3-6-2024",
  },
];

function Table() {
  return (
 <div className="table-container">
      <div className="header-2">
        <h1>Transactions</h1>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Icon</th>
              <th>Token Name</th>
              <th>Buy/Sell</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((tx, index) => (
              <tr key={index}>
                <td><img src={tx.icon} width="30" alt={`${tx.name} icon`} /></td>
                <td>{tx.name}</td>
                <td>
                  <span className={tx.type === "Buy" ? "span1" : "span2"}>
                    {tx.type}/{tx.quantity}
                  </span>
                </td>
                <td>{tx.amount}</td>
                <td>{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
