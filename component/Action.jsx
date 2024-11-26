import React, { Component } from 'react'
import { Text, View, StyleSheet, Linking, TouchableOpacity } from 'react-native'

export default function Action()  {
    function openWebsite(websiteLink){
        Linking .openURL(websiteLink)
    }

    return (
      <View>
        <TouchableOpacity
        onPress={()=>{
            openWebsite('https://reactnative.dev/docs/linking')
        }}
        >
            <Text style={styles.heading}> Action </Text>
        </TouchableOpacity>
      </View>
    )
  }

const styles = StyleSheet.create({
    heading:{

    }
})