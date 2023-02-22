import React from 'react';
import Header from './components/Header'
import Profile from './components/Profile';
import Name from './components/Name';
import Buttons from './components/Buttons';
import About from './components/About';
import Interests from './components/Interest';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
       <Header />
       <Profile />
       <Name />
       <Buttons />
       <About />
       <Interests />
       <Footer />
    </div>
  );
}

export default App;
