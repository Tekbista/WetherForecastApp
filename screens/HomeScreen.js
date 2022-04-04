import { View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Home/Header'
import WeatherAlert from '../components/Home/WeatherAlert'
import HourlyWeather from '../components/Home/HourlyWeather'
import TenDaysWeather from '../components/Home/TenDaysWeather';
import forecast from '../jsondata/forecast.json';
import curWeather from '../jsondata/current.json';
import curLocation from '../jsondata/location.json';
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/Home/BottomTab'
import SearchBar from '../components/Home/SearchBar'
import OtherFactors from '../components/Home/OtherFactors'
import {WEATHER_API_KEY} from '@env';

export default function HomeScreen() {
  const message = ""
  
  const [weatherForecast, setWeatherForecast] = useState(forecast)
  const [currentWeather, setCurrentWeather] = useState(curWeather)
  const [location, setLocation] = useState(curLocation)
  const [city, setCity] = useState("New York, USA")
  const [searchVisibility, setSearchVisibility] = useState(false)

  const FORECAST_API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=10&aqi=no&alerts=no`;


  useEffect(() => {
    
    fetch(FORECAST_API_URL)
    .then((res) => res.json())
    .then((json) => {
      setCurrentWeather(json.current);
      setLocation(json.location);
      setWeatherForecast(json);
    })
    .catch((error) => console.log(error))
  }, [city])


  return (
    <View>
      {searchVisibility?<SearchBar cityHandler={setCity} setSearchVisibility={setSearchVisibility}/> : null}
      <Header currentWeather={currentWeather} curLocation={location}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HourlyWeather todayForecast={weatherForecast.forecast.forecastday[0]}/>
        <TenDaysWeather tenDaysForecast={weatherForecast.forecast.forecastday}/>
        <OtherFactors currentWeather={currentWeather}/>
      </ScrollView>
      <Divider width={1} color="#fff"/>
      <BottomTabs setSearchVisibility={setSearchVisibility}/>
    </View>
  )
}




