import "./Home.css";
import { useContext, useState, useEffect } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { allCoins, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);  // To store suggestions

  const inputHandler = (event) => {
    const value = event.target.value;
    setInput(value);
  
    if (value.trim() === "") {
      setSuggestions([]); // Clear suggestions
      setDisplayCoin(allCoins); // Display all coins
    } else {
      const filteredSuggestions = allCoins
        .filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5); // Limit suggestions to 5 items
      setSuggestions(filteredSuggestions);
    }
  };
  

  const suggestionClickHandler = (name) => {
    setInput(name);  // Set input to selected suggestion
    setSuggestions([]);  // Clear suggestions after selection
    searchHandler({ preventDefault: () => {} });  // Manually call searchHandler
  };

  const searchHandler = (event) => {
    event.preventDefault();
    const coins = allCoins.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(coins);
  };

  useEffect(() => {
    if (Array.isArray(allCoins)) {
      setDisplayCoin(allCoins);
    }
  }, [allCoins]);

  return (
    <div className="home">
      <div className="hero">
        <h1>Largest <br />Crypto Marketplace</h1>
        <p>Welcome to the World&apos;s largest Cryptocurrency marketplace. <br />Sign up to explore more about cryptos.</p>
        <form onSubmit={searchHandler}>
          <input
            onChange={inputHandler}
            value={input}
            type="text"
            placeholder="Search crypto... "
            required
          />
          <button type="submit">Search</button>
        </form>
        
        {suggestions.length > 0 && (
          <div className="autocomplete">
            {suggestions.map((coin, index) => (
              <div
                key={index}
                onClick={() => suggestionClickHandler(coin.name)}
                className="suggestion-item"
              >
                {coin.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24Hr Change</p>
          <p style={{ textAlign: "right" }}>Market Cap</p>
        </div>
        {displayCoin.length > 0 ? (
          displayCoin.slice(0, 10).map((item, index) => (
            <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt="" />
                <p>{item.name + " - " + item.symbol}</p>
              </div>
              <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
              <p style={{
                textAlign: "center",
                color: item.price_change_percentage_24h > 0 ? '#00cc70' : 'red'
              }}>
                {Math.floor(item.price_change_percentage_24h * 100) / 100}%
              </p>
              <p style={{ textAlign: "right" }}>{currency.symbol} {item.market_cap.toLocaleString()}</p>
            </Link>
          ))
        ) : (
          <p style={{ textAlign: "center", height: "50px" }}>Loading coins...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
