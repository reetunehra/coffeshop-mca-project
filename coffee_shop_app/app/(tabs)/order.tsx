import { Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { usePageHeader } from '@/components/PageHeader';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ProductList from '@/components/CartProductList';
import { Product } from '@/types/types';
import { useCart } from '@/components/CartContext';
import { fetchProducts } from '@/services/productService';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Toast from 'react-native-root-toast';
import { router } from 'expo-router';

const Order = () => {
  const {cartItems, setQuantityCart, emptyCart} = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const calculateTotal = (products: Product[], quantities:{[key:string]: number}) => {
    return products.reduce((total,product) => {
      const quantity = quantities[product.name] ||0
      return total+product.price * quantity;
    },0)
  }
  useEffect(() => {
    const total = calculateTotal(products,cartItems)
    setTotalPrice(total)

  },[cartItems,products])

  useEffect(() => {
    const loadProducts = async () => {
      try{
        const productData =await fetchProducts();
        setProducts(productData)

        const total = calculateTotal(productData,cartItems)
        setTotalPrice(total)
      } catch(err) {
        console.error(err);
      } finally {
        setLoading(false)
      }
    };

    loadProducts();
  },[])

  usePageHeader({ title: "Order", showHeaderRight: false, bgColor: "#F9F9F9" });

  const orderNow = () => {
    emptyCart();
    Toast.show('Order is placed Successfully!', {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM
    })
    router.push("/thankYou")
  }

  return (
    <GestureHandlerRootView
      className='w-full h-full bg-[#F9F9F9]'
    >
      <View
        className='h-full flex-col justify-between'
      >
        <View
          className='h-[80%]'
        >
            <ProductList products={products} quantities={cartItems} setQuantaties={setQuantityCart} totalPrice={totalPrice}/>
        </View>

        <View
          className='bg-white rounded-tl-3xl rounded-tr-3xl px-7 pt-3 pb-20'
        >
          <View
            className='flex-row justify-between items-center'
          >
            <View
              className='flex-row items-center'
            >
              <Ionicons name="wallet-outline" size={24} color="#C67C4E"/>

              <View>
                <Text
                  className='text-[#242424] text-base font-[Sora-SemiBold] pb-1 ml-3'
                >
                  Cash/Wallet
                </Text>
                <Text
                  className='text-app_orange_color text-sm font-[Sora-SemiBold] ml-3'
                >
                &#x20B9; {totalPrice === 0 ?0 :totalPrice+1}
                </Text>
              </View>
            </View>

            <MaterialIcons name='keyboard-arrow-down' size={24} color='black'/>
          </View>

          <TouchableOpacity
            className={`${totalPrice === 0 ? 'bg-[#EDEDED]': 'bg-app_orange_color'} h-[25%] rounded-2xl items-center justify-center mt-6 py-3`} 
            disabled={totalPrice===0}
            onPress={orderNow}
          >
            <Text
              className='text-2xl text-white font-[Sora-SemiBold]'
            >
              Order
            </Text>
          </TouchableOpacity>

        </View>

      </View>
      
    </GestureHandlerRootView>
  )
}

export default Order

