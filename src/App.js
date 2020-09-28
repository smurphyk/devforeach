import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.scss';

import Header from './components/header';
import Banner from './components/banner';
import About from './components/about';
import Cards from './components/cards';
import Footer from './components/footer';

function App() {
  return (
    <Container id="App">
      <Header />
      <React.StrictMode>
        <Banner />
        <About />
        <Cards />
      </React.StrictMode>
      <Footer />
    </Container>
  );
}

export default App;
