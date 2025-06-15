import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Product } from '@/types/types'
import OrdersHeader from './OrdersHeader';
import OrderFooter from './OrderFooter';

interface ProductListProps {
    products: Product[];
    quantities: {[key:string]:number};
    setQuantaties: (itemkey:string, delta:number) => void; 
    totalPrice: number;
}

const ProductList = ({products,quantities,setQuantaties,totalPrice}:ProductListProps) => {
    const filteredProducts = products.filter((product) => (quantities[product.name] || 0) >0)
    const renderItem = ({item}: {item: Product}) => (
        <View
            className='flex-row items-center justify-between mx-7 pb-3'
        >
           <Image  
            source={{uri: item.image_url}}
            className='w-16 h-16 rounded-lg'
           />
           <View className='flex-1 ml-4'>
            <Text
             className='text-lg font-[Sora-SemiBold] text-[#242424]'
            >{item.name}</Text>
            <Text
             className='text-xs font-[Sora-Regular] text-gray-500'
            >{item.category}</Text>
            </View>

            <View
                className='flex-row items-center'            
            >
                <TouchableOpacity
                    onPress={() => setQuantaties(item.name, -1)}
                >
                    <Text
                    className='text-xl font-[Sora-SemiBold]'>-</Text>
                </TouchableOpacity>
                <Text className='mx-3 font-[Sora-SemiBold] '>{quantities[item.name]||0}</Text>
                <TouchableOpacity
                    onPress={() => setQuantaties(item.name, 1)}
                >
                    <Text
                    className='text-xl font-[Sora-SemiBold]'>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
  
    return (
    <View>
      {filteredProducts.length >0 ? (
        <FlatList
            data={filteredProducts}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            ListHeaderComponent={<OrdersHeader/>}
            ListFooterComponent={<OrderFooter totalPrice={totalPrice}/> }
        />
      ): (
        <View
            className='mx-7 items-center '
        >
            <Text 
                className='text-2xl font-[Sora-SemiBold] text-gray-500 mv-4 text-center'
            >No items in your cart yet...</Text>
            <Text
                className='text-2xl font-[Sora-SemiBold] text-gray-500 mv-4 text-center'

            >Let's Go Get Some Delicious Goodies..</Text>
        </View>
      )}
    </View>
  )
}

export default ProductList
