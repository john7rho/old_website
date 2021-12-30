import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';


import Carousel from '../components/Carousel';
import johnpic from '../assets/images/Rho-John-5.jpg';
import './HomePage.css';
import Typewriter from "typewriter-effect";


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
      textAlign: 'center'
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

            <Text style = {StyleSheet.fillerText}>
                   {'\n'}
            </Text>

            <View style={styles.container}>
                <View>
                    <Image
                        style={{
                        resizeMode: "cover",
                        height: 200,
                        width: 200,
                        alignSelf: 'center',
                        borderRadius: 200/2,
                    }}
                source={johnpic}
                />
                </View>
            </View>

            <div className='Type'>
            <Typewriter
            onInit={(typewriter)=> {typewriter
              .typeString("Hey there!")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Welcome to my website.")
              .start();
            }}
            />
            </div>

            <hr></hr>
            <View style={styles.container}>
               <Text style = {styles.innerText} class='center'>
                 Here are some things I'm exploring
               </Text>
            </View>
            

            <Carousel />

            
            
        </div>

        
    );

    

}

export default HomePage;