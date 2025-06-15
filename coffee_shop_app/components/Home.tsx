import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View className='flex-1 items-center justify-center bg-black'>
      <Text className='text-3xl font-bold color-white'>Welcome to Coffee Shop</Text>
      <Text className='text-2xl color-white'>This is a coffee shop app</Text>
      <Text className='text-lg'>This is a starter app</Text>
      <Text className='text-base'>You can start building your app from here</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})