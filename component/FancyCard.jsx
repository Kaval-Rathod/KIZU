import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Action from './Action';

export default function FancyCard() {
    return (
      <View>
        <Text style={styles.headingText}> Tranding places </Text>
        <View>
        <View style={[styles.card, styles.cardElevated]}>
            <Image
            source={{
                uri:'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'
            }}
            style={styles.cardImage}
            />
            <View style={styles.cardBody} >
                <Text style={styles.cardImgHeading}>Color Changing Thing</Text>
                <Text style={styles.cardImageDiscription}>Hello This is color changing thibg which is changing color it self. It's Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, doloremque!</Text>
                <Text style={styles.cardImageTime}>12 mins away from you</Text>
            </View>
            <Action/>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Image
            source={{
                uri:'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'
            }}
            style={styles.cardImage}
            />
            <View style={styles.cardBody} >
                <Text style={styles.cardImgHeading}>Color Changing Thing</Text>
                <Text numberOfLines={1} style={styles.cardImageDiscription}>Hello This is color changing thibg which is changing color it self. It's Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, doloremque!</Text>
                <Text style={styles.cardImageTime}>12 mins away from you</Text>
            </View>
            <Action/>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Image
            source={{
                uri:'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'
            }}
            style={styles.cardImage}
            />
            <View style={styles.cardBody} >
                <Text style={styles.cardImgHeading}>Color Changing Thing</Text>
                <Text style={styles.cardImageDiscription}>Hello This is color changing thibg which is changing color it self. It's Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, doloremque!</Text>
                <Text style={styles.cardImageTime}>12 mins away from you</Text>
            </View>
            <Action/>
        </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    card:{
        margin:10,
        // padding:10,
    },
    cardElevated:{
        elevation:4,
        borderRadius:5,
        shadowOffset:{
            width:1,
            height:1,
        }

    },
    cardImage:{
        // width: 98,
        height: 200,
        borderRadius:5,
        marginHorizontal:10,
        marginTop:15
    },
    cardBody:{
        margin:10
    },
    cardImgHeading:{
        fontSize:20,
        fontWeight:'bold'
    },
    cardImageDiscription:{

    },
    cardImageTime:{
        fontSize:15,
        fontWeight:'bold'
    }
})