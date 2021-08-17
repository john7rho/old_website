import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SocialFollow from "./components/SocialFollow";


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'John Rho',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'Resume', path: '/resume'}
      ],
      home: {
        title: 'Innovate to inspire',
        subTitle: 'Welcome to my website! (Work In Progress)',
        text: 'Checkout some stuff I am working on below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Chat!'
      } 
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-3" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>John Rho</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                <Link className="nav-link" to="/resume" target = '_blank'>Resume</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path='/resume' component={() => { 
            window.location.href = 'https://docs.google.com/document/d/15hKXYGbtROTUrAzjA-PeGGlcLu7p2dNSyvm-61EaL1o/edit?usp=sharing'; 
            return null;
          }}/>
          
          <Footer />    
          <SocialFollow />     


        </Container>
      </Router>
    );
  }
}

export default App;
