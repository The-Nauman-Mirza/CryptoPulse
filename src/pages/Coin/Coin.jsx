import { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const { currency } = useContext(CoinContext);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
        const data = await response.json();
        console.log("Fetched Coin Data:", data);
        setCoinData(data);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    const fetchHistoricalData = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`);
        const data = await response.json();
        console.log("Fetched Historical Data:", data);
        setHistoricalData(data);
      } catch (error) {
        console.error("Error fetching historical data:", error);
      }
    };

    fetchHistoricalData();
    fetchCoinData();
  }, [coinId, currency.name]);  // Use currency.name as the dependency

  if (coinData && historicalData) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coinData.image?.large || ''} alt={coinData.name || 'Crypto'} />
          <p><b>{coinData.name?.toUpperCase()} {"-"} ({coinData.symbol?.toUpperCase()})</b></p>
        </div>

        <div className="coin-chart">
          <LineChart historicalData={historicalData} />
        </div>

        <div className="coin-info">
          <p>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </p>
          <p>
            <li>Current Price</li>
            <li>{currency.symbol} {coinData.market_data?.current_price[currency.name]?.toLocaleString() || 'N/A'}</li>
          </p>
          <p>
            <li>Market cap</li>
            <li>{currency.symbol} {coinData.market_data?.market_cap[currency.name]?.toLocaleString() || 'N/A'}</li>
          </p>
          <p style={{color:"#00cc70"}}>
            <li>24 hour High</li>
            <li>{currency.symbol} {coinData.market_data?.high_24h[currency.name]?.toLocaleString() || 'N/A'}</li>
          </p>
          <p style={{color:"red"}}>
            <li>24 hour Low</li>
            <li>{currency.symbol} {coinData.market_data?.low_24h[currency.name]?.toLocaleString() || 'N/A'}</li>
          </p>
          <p>
            <li>Last Updated</li>
            <li>{coinData.last_updated}</li>
          </p>
         
        </div>


      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;
