import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import Calendar from 'react-native-vector-icons/EvilIcons';
import { Divider } from 'react-native-elements';
import moment from 'moment';

export default function TenDaysWeather({tenDaysForecast}) {
  return (
    <View style={styles.forecast}>
      <Title />
      <Divider width={1} color="#fff"/>
      {tenDaysForecast.map((day, index) =>(
        <View key={index}>
            <EachDayWeather day={day}/>
            {index < tenDaysForecast.length -1? (
            <Divider width={1} color="#fff"/>
            ): (<></>)}
        </View>
      ))}
    </View>
  )
}

const Title = () =>{
    return(
        <View style={styles.title}>
            <Calendar name="calendar" size={25} color="#fff" style={{marginRight: 10}}/>
            <Text style={styles.weatherInfo}>10-DAY FORECAST</Text>  
        </View>
    )
}

const EachDayWeather = ({day}) =>{
    var dayName = moment(day.date).format("dddd") == moment(new Date()).format("dddd")? "Today": moment(day.date).format("dddd");

    return(
        <View>
            <View style={styles.list}>
                <View style={styles.dateCol}>
                    <Text style={styles.weatherInfo}>{dayName}</Text>
                </View >
                <View style={styles.otherCol}>
                    <Image source={{uri: `https:${day.day.condition.icon}`}} style={styles.weatherlogo}></Image>
                    <Text style={styles.weatherInfo}>L: {day.day.mintemp_f}°</Text>
                    <Text style={styles.weatherInfo}>H: {day.day.maxtemp_f}°</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    forecast: {
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#2FADF7",
        padding: 10,
        color: "white",
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    list: {
        flexDirection: "row",
        fontFamily: "Cochin",
        justifyContent: "space-between",
        alignItems: 'center',
        marginVertical: 10,
    },
    weatherlogo: {
        height: 50,
        width: 50,
        borderRadius: 10,
        margin: 0,
    },
    weatherInfo:{
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
    },

    calendar: {
        marginRight: 10,
    },

    dateCol:{
        width: "30%"
    }, 

    otherCol:{
        width: "70%",
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: 'center',
    }
})