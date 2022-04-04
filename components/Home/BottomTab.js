import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";


export default function BottomTabs({setSearchVisibility}) {
  return (
    <View style={{
      flexDirection: "row", 
      paddingHorizontal: 20, 
      justifyContent: "space-between",
      alignItems: 'center',
      height: 60,
      backgroundColor: "#fff"
      }}>
      <TouchableOpacity onPress={() => setSearchVisibility(true)}>
        <Icon icon="search1" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon  icon="setting"/>
      </TouchableOpacity>
      
    </View>
  )
}

const Icon = ({icon}) =>(
    <View>
      <AntDesign 
        name={icon}
        size={25} 
        style={{marginBottom: 3, alignSelf: "center"}}
      />
    </View>
)