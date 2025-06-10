import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Aurora from './components/Aurora';
import './index.css'; // Import global styles
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
