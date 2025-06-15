import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const DeliveryToggle = () => {
    const[isDeliver, setIsDelivery] = useState<boolean>(true);
  return (
    <View
        className='flex-row justify-between bg-[#EDEDED] mx-7 p-1 rounded-xl m-7'
    >
      <TouchableOpacity
        className={`py-2 px-[15%] font-[Sora-SemiBold] rounded-xl ${isDeliver ? 'bg-[#C67C4E]':''}`}
        onPress={() => setIsDelivery(true)}
      >
        <Text
            className={`text-lg font-[Sora-SemiBold] ${isDeliver ? 'text-white': 'text-black'}`}
        >Deliver</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className={`py-2 px-[15%] font-[Sora-SemiBold] rounded-xl ${!isDeliver ? 'bg-[#C67C4E]':''}`}
        onPress={() => setIsDelivery(false)}
      >
        <Text
            className={`text-lg font-[Sora-SemiBold] ${!isDeliver ? 'text-white': 'text-black'}`}
        >Pick Up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DeliveryToggle

const styles = StyleSheet.create({})