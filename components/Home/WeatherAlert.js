import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function WeatherAlert({message}) {
  return (
       message? (
        <View>
        <Text style={styles.alertMessage}>{message}</Text>
        </View>
    ): (<></>)
  )
}

const styles = StyleSheet.create({
    alertMessage: {
        color: 'red',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 15,
    }
})