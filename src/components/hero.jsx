import pfpImg from '../assets/pfp.jpg';

export default function Hero() {
  const copy = () => {
    navigator.clipboard.writeText('npx shushmita');
  };

  return (
    <header className="hero-container">
      <img src={pfpImg} className="profile-img" alt="Avatar" />
      <div className="hero-info">
        <h1>Hi, I'm Shushmita</h1>
        {/* <p className="tagline">I mess with code, break stuff, and make it better</p> */}
        <div className="command-bar" onClick={copy}>
        <span className="neural-nodes"></span>
        <code className="outlier-text">aka outlier</code>
      </div>
      </div>
    </header>
  );
}