import React from 'react';
import ReactDOM from 'react-dom';
import Particles from "react-tsparticles";

import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';   
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import SocialFollow from "./components/SocialFollow";
import Typewriter from "typewriter-effect";


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Blog', path: '/blog' },
        { title: 'Contact', path: '/contact' },
        { title: 'Resume', path: '/resume'}
      ],
      home: { /* not using this*/
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
        <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#aaaaaa",
            },
            links: {
              color: "#111111",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          }}>
        <Container className="p-3" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand></Navbar.Brand> {/* should add personal logo here*/}
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/blog">Blog</Link>
                {/*<Link className="nav-link" to="/contact">Contact</Link>*/}
                <Link className="nav-link" to="/resume">Resume</Link>
                {/*<Link className="nav-link" to="/resume" target = '_blank'>Resume</Link>*/}
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/blog" render={() => <BlogPage title='My Blog' />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path='/resume' component={() => { 
            window.location.href = 'https://docs.google.com/document/d/15hKXYGbtROTUrAzjA-PeGGlcLu7p2dNSyvm-61EaL1o/edit?usp=sharing'; 
            return null;
          }}/>  
        </Container>
        
        <Footer/>
        <SocialFollow/>
        </div>
        
        
        
      </Router>
    );
  }
}

export default App;