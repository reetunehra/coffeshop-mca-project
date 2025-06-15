import { Image, Text, View } from 'react-native'
import React from 'react'

const Banner = () => {
  return (
    <View className="rounded-lg items-center">
      <View className="absolute w-full h-[90px] -top-1 items-center bg-[#222222] pb-10" />
        <Image
        source={require("@/assets/images/banner.png")}
        className="w-[90%] h-40 rounded-3xl"
        />

        <View className='absolute w-[85%] pl-7 mt-2'>
        {/* Promo badget */}
        <Text className="bg-[#ED5151] rounded-lg text-white mb-1 text-m p-1.5 font-[Sora-SemiBold] self-start">
            Promo
        </Text>
        {/* Promo title */}
        
        <View
            className='bg-[#222222] w-[65%] h-7 top-6'
        >
        </View>

        <View
            className='bg-[#222222] w-[50%] h-7 top-9'
        >
        </View>

        <Text
             className='text-white text-4xl font-[Sora-SemiBold] mt-2 w-[75%] -top-14'
             style={{lineHeight: 45, letterSpacing: 1.5}}
        >
            Buy one get one FREE
        </Text>

        </View>
      </View>
    
  );
}

export default Banner
