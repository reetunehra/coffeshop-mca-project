import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DeliveryToggle from './DeliveryToggle'

const OrdersHeader = () => {
  return (
    <View>
        <DeliveryToggle />
      <Text
        className='mx-7 mt-7 text-[#242424] text-lg font-[Sora-SemiBold]'
      > 
        Delivery Address 
      </Text>
      <Text
        className='mx-7 mt-3 text-[#242424] text-base font-[Sora-SemiBold] mb-2'
      > Tb-6
      </Text>
      <Text 
        className='mx-7 text-[#A2A2A2] text-xs font-[Sora-SemiBold] mb-3'
      >
       GJUS&T, Hisar
      </Text>

      <View
        className='mx-12 border-b border-gray-400 my-4'
      >

      </View>
    </View>
  )
}

export default OrdersHeader

const styles = StyleSheet.create({})