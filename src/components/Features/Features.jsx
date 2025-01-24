import "./Features.css";

const Features = () => {
  return (
    <div className="features">
      <h1>Platform Features</h1>
        <p>
          <strong style={{color:"white"}}>Real-Time Market Data</strong> : <br /> Stay updated with the latest market prices, rank, and changes in cryptocurrency valuations.
        </p>
        <p>
          <strong style={{color:"white"}}>Dynamic Currency Conversion</strong> : <br /> Easily switch between USD, EUR, and INR to view data in your preferred currency.
        </p>
        <p>
          <strong style={{color:"white"}}>Interactive Search</strong> : <br /> Quickly find the cryptocurrency you&apos;re interested in using our powerful search bar.
        </p>
        <p>
          <strong style={{color:"white"}}>Customizable Interface</strong> : <br /> Filter and display top coins to monitor market trends effortlessly.
        </p>
      <h3>Why Choose CryptoPulse?</h3>
      <p>
        CryptoPulse brings real-time analytics and a seamless user experience for tracking the volatile world of cryptocurrencies.
      </p>
    </div>
  );
};

export default Features;
