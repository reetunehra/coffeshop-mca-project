import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface OrderFooterProps {
    totalPrice: number
}

const OrderFooter = ({totalPrice}:OrderFooterProps) => {
  return (
    <View>
        <View
            className='border-b-4 border-[#F9F2ED] mt-3'
        >
            <Text
                className='mx-7 text-[#242424] text-xl font-[Sora-SemiBold] mb-4 mt-4'
            >
                Payment Summary
            </Text>
            <View
                className='flex-row justify-between mx-7 mb-3'
            >
                <Text
                    className='text-base font-[Sora-SemiBold]'
                >
                    Price
                </Text>

                <Text
                    className='text-base font-[Sora-SemiBold]'
                >
                    &#x20B9; {totalPrice}
                </Text>
            </View>

            <View
                className='flex-row justify-between mx-7 mb-3'
            >
                <Text
                    className='text-base font-[Sora-SemiBold]'
                >
                    Delivery Fee
                </Text>

                <Text
                    className='text-base font-[Sora-SemiBold]'
                >
                    &#x20B9; {totalPrice === 0 ?0 :1}
                </Text>
            </View>

        </View>
    
    </View>
  )
}

export default OrderFooter

const styles = StyleSheet.create({})