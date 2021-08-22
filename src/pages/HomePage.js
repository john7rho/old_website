import React from 'react';
import { Text, StyleSheet } from 'react-native';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

const styles = StyleSheet.create({
    baseText: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    innerText: {
      color: 'blue'
    }
  });

function HomePage(props) {

    return(
        <div>
            {/*<Hero title={props.title} subTitle={props.subTitle} text={props.text} /> removed Hero component due to formatting*/}

            <Text style = {styles.baseText}>
                Welcome to my website! {'\n'}
            </Text>
            <Text style = {styles.innerText}>
                Check out some stuff I'm working on. (Work in progress!)
            </Text>

            <Carousel />
        </div>
    );

}

export default HomePage;