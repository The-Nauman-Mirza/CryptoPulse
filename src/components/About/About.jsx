import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>About CryptoPulse</h1>
      <p>
        Welcome to <strong style={{color:"white"}}>CryptoPulse</strong>, your gateway to the largest cryptocurrency marketplace! Our platform provides real-time data on various cryptocurrencies, helping users make informed decisions with up-to-date market trends.
      </p>
      <h3>Core Functionalities ↓</h3>
        <p>1. View market rankings and price details for top cryptocurrencies.</p>
        <p>2. Track 24-hour price changes and market capitalization.</p>
        <p>3. Switch between different currencies (USD, EUR, INR) for localized data.</p>
        <p>4. Search for your favorite cryptocurrencies instantly.</p>
    
      <h3>Our Mission ↓</h3>
      <p>
        We aim to simplify cryptocurrency trading and investment by providing a user-friendly, data-driven platform for all enthusiasts and professionals alike.
      </p>
    </div>
  );
};

export default About;
