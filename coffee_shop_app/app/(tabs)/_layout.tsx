import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const TabsLayout = () => {
  return (
    < >
      <Tabs 
        screenOptions={{
          tabBarActiveTintColor: "#C67C4E"
        }}
      >
        <Tabs.Screen 
          name='home'
          options={{
            headerShown: false,
            title: 'Home',
            tabBarIcon: ({color}) => (
              <AntDesign name="home" size={24} color={color} />
            )
          }}
        />

        <Tabs.Screen 
          name='chatRoom'
          options={{
            headerShown: true,
            title: 'Chat Bot',
            tabBarStyle: {'display': 'none'},
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="robot-happy-outline" size={24} color={color} />
            )
          }}
        />

        <Tabs.Screen 
          name='order'
          options={{
            headerShown: true,
            title: 'Cart',
            tabBarStyle: {'display': 'none'},
            tabBarIcon: ({color}) => (
              <FontAwesome5 name="opencart" size={24} color={color} />
            )
          }}
        />


      </Tabs>
    
    </>
    
  )
}

export default TabsLayout

const styles = StyleSheet.create({})