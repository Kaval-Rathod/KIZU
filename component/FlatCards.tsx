import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FlatCards(){
    return (
        <View>
            <Text style={styles.headingText}>FlatCard</Text>
            <ScrollView>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]} >
                    <Text style={styles.txt}>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]} >
                    <Text style={styles.txt}>Red</Text>
                </View>
                <View style={[styles.card, styles.cardThree]} >
                    <Text style={styles.txt}>Red</Text>
                </View>
                <View style={[styles.card, styles.cardFour]} >
                    <Text style={styles.txt}>Red</Text>
                </View>
                <View style={[styles.card, styles.cardFour]} >
                    <Text style={styles.txt}>Red</Text>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    container:{
        flex:1,
        flexDirection:'row',
        overflow:'scroll'
    },

    card:{
        width:100,
        height: 100,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:5,
        margin:5
    },
    cardOne:{
        backgroundColor: 'red'
    },
    cardTwo:{
        backgroundColor: '#221545'
    },
    cardThree:{
        backgroundColor: 'green'
    },
    cardFour:{
        backgroundColor: 'blue'
    },
    txt:{
        color: '#FFFFFF'
    }
})