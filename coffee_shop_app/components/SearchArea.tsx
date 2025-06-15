import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

const SearchArea = () => {
  return (
    <View
      className='w-full items-center bg-[#222222] pb-6'
    >
    <View
        className='flex w-[90%] pt-8'
    >

    <Text
         className='text-[#A2A2A2] text-sm font-[Sora-Regular]'
      >
       Location 
       </Text>

      <Text
         className='text-white font-[Sora-Regular]'
      >
          GJU,Hisar
       </Text>
    <View
        className='w-full mt-5 flex-row justify-between'
    >
    <View
        className='flex w-[80%] h-14 px-4 bg-[#2A2A2A] rounded-2xl focus:border-secondary justify-center' 
    >
     <FontAwesome name="search" size={24} color="white" />
    </View>
    
    <TouchableOpacity
        className='flex-2 w-14 h-14 bg-app_orange_color rounded-2xl items-center justify-center'
    >
    <Entypo name="sound-mix" size={24} color="white" />

    </TouchableOpacity>

    </View>
    </View>
    </View>
  )
}

export default SearchArea

