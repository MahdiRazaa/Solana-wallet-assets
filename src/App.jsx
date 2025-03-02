import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="header">
          <h1>Dashboard</h1>
        </div>
        <div className="container">
          <input type="text" />
          <button className="sub-btn">Submit</button>
          <div className="cards-section">
            <div className="card">
              <div className="card-image">
                <img
                  src="src\assets\images\bitcoin.png"
                  width="30px"
                  alt="bitcoin-image"
                />
                <p>Bitcoin</p>
                <p>14 coins</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img
                  src="src\assets\images\ETH.png"
                  width="30px"
                  alt="Etherum-coin-image"
                />
                <p>Ethereum</p>
                <p>10 coins</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img
                  src="src\assets\images\sol.jpeg"
                  max-width="30px"
                  alt="solana-coin-image"
                />
                <p>solana</p>
                <p>15 coins</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img
                  src="src\assets\images\BNB.png"
                  width="30px"
                  alt="BNB-coin-image"
                />
                <p>BNB</p>
                <p>8 coins</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img
                  src="src\assets\images\Tron.png"
                  width="30px"
                  alt="Tron-coin-image"
                />
                <p>Tron</p>
                <p>13 coins</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img
                  src="src\assets\images\Ada.jpeg"
                  width="30px"
                  alt="Ada-coin-image"
                />
                <p>Ada</p>
                <p>17 coins</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img
                  src="src\assets\images\Ton.jpeg"
                  width="30px"
                  alt="Ton-coin-image"
                />
                <p>Ton</p>
                <p>20 coins</p>
              </div>
            </div>
          </div>
        </div>
        <div className="table-container">
          <div className="header-2">
            <h1>Transactions</h1>
          </div>
          <table border={1} cellPadding={3}>
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
              <tr>
                <td>
                  <img src="src\assets\images\BNB.png" width="30" />
                </td>
                <td>BNB</td>
                <td>
                  <span className="span1">Buy/5</span>
                </td>
                <td>2658</td>
                <td>5-7-2023</td>
              </tr>
              <tr>
                <td>
                  <img src="src\assets\images\Ada.jpeg" width="30" />
                </td>
                <td>Ada</td>
                <td>
                  <span className="span2">sell/4</span>
                </td>
                <td>2560</td>
                <td>2-1-2024</td>
              </tr>
              <tr>
                <td>
                  <img src="src\assets\images\bitcoin.png" width="30" />
                </td>
                <td>bitcoin</td>
                <td>
                  <span className="span1">Buy/5</span>
                </td>
                <td>1700</td>
                <td>2022-01-01</td>
              </tr>
              <tr>
                <td>
                  <img src="src\assets\images\BNB.png" width="30" />
                </td>
                <td>dogecoin</td>
                <td>
                  <span className="span2">sell/4</span>
                </td>
                <td>23445</td>
                <td>6-8-2023</td>
              </tr>
              <tr>
                <td>
                  <img src="src\assets\images\ETH.png" width="30" />
                </td>
                <td>Ethriem</td>
                <td>
                  <span className="span1">Buy/5</span>
                </td>
                <td>22003</td>
                <td>3-6-2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
