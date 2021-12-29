import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import johnpic from '../assets/images/Rho-John-5.jpg';

const styles = StyleSheet.create({
    baseText: {
      fontWeight: 'bold',
      fontSize: 36,
    },
    innerText: {
      fontWeight: '100',
      color: 'gray',
      fontSize: 26,
      fontStyle: 'italic',
    },
    baseTextAlt: {
      fontWeight: 'bold',
      fontSize: 36,
      color: 'blue',
    },
    fillerText: {
      fontSize: 20,
      color: 'clear',
    },
  });

function HomePage(props) {

    return(
        <div>
            {/*<Hero title={props.title} subTitle={props.subTitle} text={props.text} /> removed Hero component due to formatting*/}
            
            <Image style={{
              resizeMode: "cover",
              height: 300,
              width: 300,
              alignSelf: 'center',
              borderRadius: 300 / 2
            }} source={johnpic}/>
            
            <Text style = {StyleSheet.fillerText}>
                   {'\n'}
            </Text>
            <Text style = {styles.baseText}>
                 Welcome to my {/*change font*/}
            </Text>
            <Text style = {styles.baseTextAlt}>
                 website {'\n'} {/*change font*/}
            </Text>
            <Text style = {styles.innerText}>
                 Here are some things I'm exploring
            </Text>

            <Carousel />
        </div>
    );

}

export default HomePage;