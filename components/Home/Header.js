import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'

export default function Header({currentWeather, curLocation}) {
  return (
    <View style={styles.headerView}>
      <Location city={curLocation.name} region={curLocation.region} country={curLocation.country}/>
      <Temperature temp={currentWeather.temp_f}/>
      <WeatherCondition image={currentWeather.condition.icon} text={currentWeather.condition.text}/>
      <FeelsLike temp={currentWeather.feelslike_f}/>
    </View>
  )
}

const Location = ({city, region, country}) => {
    return(
        <Text style={styles.location}>
            {city}, {region} {country}
        </Text>
    )
}

const Temperature = ({temp}) =>{
    return(
        <Text style={styles.temp}>{temp}°F</Text>
    )
}

const WeatherCondition =({image, text}) =>{
    return(
        <>
            <Image source={{uri: `https:${image}`}} style={styles.weatherIcon}/>
            <Text style={styles.conditionText}>{text}</Text>
        </>
        
    )
}

const FeelsLike = ({temp}) =>{
    return(
        <View>
            <Text style={styles.feellikes}>Feels like {temp}°F</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
    },

    location: {
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
        color: "#fff",
    },

    temp: {
        fontSize: 28,
        fontWeight: "600",
        textAlign: 'center',
        color: "#fff",
    },

    weatherCondition: {
        fontSize: 20,
        color: "#fff",
        textAlign: 'center'
    },

    conditionText: {
        fontSize: 16,
        color: "#fff",
        marginBottom: 10,
    },

    feellikes: {
        fontSize: 16,
        color: "#fff",
    },

    weatherIcon: {
        width: 50,
        height: 50,
        borderRadius: 10,
        alignSelf: 'center'
    }
})