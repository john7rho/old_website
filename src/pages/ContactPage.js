import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function ContactPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Open to any emails! I will respond as soon as I have some free time.</p>

            <p>Email: john.rho [at] cashclubcorp [dot] info </p>

            </Content>
        </div>
    );

}

export default ContactPage;