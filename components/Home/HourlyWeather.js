import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useRef } from 'react';
import { Divider } from 'react-native-elements';
import Clock from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

export default function HourlyWeather({todayForecast}) {
    
  return (
    <View style={styles.hourlyweather}>
            <Title/>
            <Divider width={1} color="#fff" style={{marginBottom: 5}}/>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {todayForecast.hour.map((hourly, index) =>(
                    <Weather hourly={hourly} key={index}/>
                ))}
                
            </ScrollView>
        </View>
  )
}

const Title = () =>{
    return(
        <View style={styles.titleView}>
            <Clock name='clockcircleo' size={20} color='white' style={styles.clockIcon}/>
            <Text style={styles.message}>24-hours weather condition</Text>
        </View>
        
    )
}

const Weather = ({hourly}) =>{
    var hour = moment(hourly.time).format("hA")
    var curHour = moment(new Date()).format("hA")
   
    return(
        <View style={styles.hour}>
            <Text style={styles.textStyle}>{hour == curHour? "Now": hour}</Text>
            <Image source={{uri: `https:${hourly.condition.icon}`}} style={styles.weatherlogo}></Image>
            <Text style={styles.textStyle}>{hourly.temp_f}°</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    hourlyweather: {
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#2FADF7",
        padding: 10,
        color: "white",
    },
    
    hour: {
        margin: 5,
        color: "#fff",
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        paddingVertical: 5,
    }, 
    titleView:{
        flexDirection: 'row',
    },
    weatherlogo: {
        height: 50,
        width: 50,
        borderRadius: 10,
        margin: 10,
    },
    textStyle: {
        color: "white",
        fontWeight: 'bold',
    },
    message: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 10,
        textAlign: 'center'

    }, 
    clockIcon:{
        marginRight: 10,
    }
})