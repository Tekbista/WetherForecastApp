import { View, Text } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from "react-native-vector-icons/Ionicons";
import {GOOGLE_API_KEY} from '@env';



export default function SearchBar({ cityHandler, setSearchVisibility}) {
  return (
    <View style={{ marginTop: 5, flexDirection: 'row',}}>
      <GooglePlacesAutocomplete
        query={{ key: `${GOOGLE_API_KEY}` }}
        onPress={(data, details = null) =>{
          const city = data.description;
          cityHandler(city);
          setSearchVisibility(false)
        }}
        placeholder='Search places'
        styles={{
          textInput: {
            borderRadius: 50,
            paddingHorizontal: 10,
            height: 30,
            fontSize: 12,
          },
          textInputContainer: {
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: 'center',
            marginHorizontal: 10,
            paddingHorizontal: 10,
            backgroundColor: "#fff",
            height: 40,
          },
        }}

        renderRightButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name='location-sharp' size={20}/>
          </View>
        )}
            
       />
    </View>
  )
}