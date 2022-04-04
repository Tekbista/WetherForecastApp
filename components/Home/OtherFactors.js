import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function OtherFactors({currentWeather}) {
  return (
    <View>
        <View style={styles.view}>
            <SubComponents icon="fan-speed-1" title="Wind Speed" value={currentWeather.wind_mph} unit="mph"/>
            <SubComponents icon="sign-direction" title="Wind Direction" value={currentWeather.wind_dir} unit=""/>
        </View>
        <View style={styles.view}>
            <SubComponents icon="sign-direction" title="Pressure" value={currentWeather.pressure_in} unit="inches Hg"/>
            <SubComponents icon="air-humidifier" title="Humidity" value={currentWeather.humidity} unit=""/>
        </View>
        <View style={styles.view}>
            <SubComponents icon="eye" title="Visibility" value={currentWeather.vis_miles} unit="miles"/>
            <SubComponents icon="air-humidifier" title="UV" value={currentWeather.uv} unit=""/>
        </View>
    </View>
    
  )
}

const SubComponents = ({icon, title, value, unit}) =>{
    return(
        <View style={styles.windSpeed}>
            <View style={styles.header}>
                <Icon name={icon} size={20} color="#fff"/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
            <View style={styles.infoView}>
                <Text style={styles.info}>{value}</Text>
                <Text style={styles.units}>{unit}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        marginVertical: 10,
        flexDirection: 'row',
    },

    windSpeed:{
        backgroundColor: "#2FADF7",
        borderRadius: 10,
        width: "45%",
        color: "#fff",
        padding: 10,
        marginHorizontal: 10,
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        marginBottom: 15,
    },
    headerText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
        marginLeft: 10,
    },
    infoView: {
        flexDirection: "column",
        alignItems: 'center',
    },
    info: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "700"
    },
    units:{
        color: "#fff",
        fontSize: 12,

    }
})