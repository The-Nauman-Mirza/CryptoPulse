import './Navbar.css';
import arrow_icon from '../../assets/arrow_icon.png';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { CoinContext } from '../../context/CoinContext.jsx';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const {setCurrency} = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case 'usd':
        setCurrency({
          name: 'usd',
          symbol: '$'
        });
        break;
      case 'eur':
        setCurrency({
          name: 'eur',
          symbol: '€'
        });
        break;
      case 'inr':
        setCurrency({
          name: 'inr',
          symbol: '₹'
        });
        break;
      default:
        setCurrency({
          name: 'usd',
          symbol: '$'
        });

    }
  }

  return (
    <div className="navbar">
      {/* Inline SVG */}
      <Link to={"/"}>
      <div className="svg-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" className="crypto-svg ">
          {/* Background */}
          <rect width="400" height="200" fill="#1a1a2e" />
          {/* Pulse Wave */}
          <path
            d="M 50 100 
               L 100 100 
               L 130 60 
               L 160 140 
               L 190 80 
               L 220 120 
               L 250 100 
               L 550 100"
            stroke="#00ff88"
            strokeWidth="4"
            fill="none"
          />

          {/* Cryptocurrency Symbol */}
          <circle
            cx="160"
            cy="100"
            r="40"
            stroke="#4a90e2"
            strokeWidth="3"
            fill="none"
          />
          {/* Text */}
          <text
            x="200"
            y="160"
            fontFamily="Arial, sans-serif"
            fontSize="60"
            fontWeight="bold"
            fill="#ffffff"
            textAnchor="middle"
          >
            CryptoPulse
          </text>
          {/* Dots representing nodes */}
          <circle cx="130" cy="60" r="4" fill="#00ff88" />
          <circle cx="160" cy="140" r="4" fill="#00ff88" />
          <circle cx="190" cy="80" r="4" fill="#00ff88" />
          <circle cx="220" cy="120" r="4" fill="#00ff88" />
          {/* Subtle glow effects */}
          <circle cx="160" cy="100" r="45" fill="url(#glowGradient)" opacity="0.2" />
          {/* Gradient definition */}
          <defs>
            <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4a90e2" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#4a90e2" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      </Link>

      {/* Navbar Links */}
      <ul>
        <li onClick={() => { navigate('/') }}>Home</li>
        <li onClick={() => { navigate('/features') }}>Features</li>
        <li>Pricing</li>
        <li onClick={() => { navigate('/about') }}>About</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button className='' onClick={() => { navigate('/signup') }}>
          Register <img src={arrow_icon} alt="Arrow Icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;