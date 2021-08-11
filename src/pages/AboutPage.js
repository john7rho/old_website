import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hey, I'm John. I'm currently building skills in React and Python for fun.</p>

            <p>I am currently a student at Harvard College (Class of 2025) considering Econ, CS, and Mind Brain Behavior.</p>

            <p>In the past, I've worked on deep learning projects to help make more intelligent hearing aids that can address the cocktail party problem.</p>

            <p>I've co-founded organizations like <a href="https://cashclubcorp.info" target="_blank" rel="noopener noreferrer">CASH Club Corp.</a> and <a href="https://aysi.org" target="_blank" rel="noopener noreferrer">the Association for Young Scientists and Innovators.</a>.</p>

            </Content>
        </div>
    );

}

export default AboutPage;