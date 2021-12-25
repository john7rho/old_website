import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { View, Image, StyleSheet } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

import "./BlogPage.css"; //added styles but likely do not need the file


const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 50,
    },
    picture: {
        width: 100,
        height: 100,
    },
});

function BlogPage(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/600x400" />
                <Card.Body>
                    <Card.Title>Blog #000001</Card.Title>
                    <Card.Text>
                        The Start
                    </Card.Text>
                    <Button variant="primary">Coming Soon</Button>
                </Card.Body>
            </Card>
        </div>

        
    );

}

export default BlogPage;