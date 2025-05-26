import './App.css';
import Navbar from './components/Navbar';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <div>
          <h1>Welcome to my website</h1>
          <p>I'm a software engineer with a passion for building web applications :D</p>
          <SocialLinks />
        </div>
      </main>
    </div>
  );
}

export default App;
