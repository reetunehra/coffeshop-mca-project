import { View, Text, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

interface DetailsHeaderInterface {
  image_url: string;
  name: string;
  type: string;
  rating: number;
}

const DetailsHeader = ({
  image_url,
  name,
  type,
  rating,
}: DetailsHeaderInterface) => {
  return (
    <>
      <Image
        source={{ uri: image_url }}
        className="w-full h-48 rounded-2xl mt-2"
      />
      <View>
        <Text
           className='text-[#242424] text-2xl font-[Sora-SemiBold] ml-1 mt-4'
        >{name}
        
        </Text>

        <View
           className='flex-row w-full justify-between'
        >
            <Text
               className='text-[#A2A2A2] text-sm font-[Sora-SemiBold] ml-1 mt-1 mb-5'
            >
                {type}
            </Text>

        <View
            className='flex-row mt-2'
        >
            <View
                className='bg-[#F5F5F5] p-2 rounded-xl mr-2'
            >
                <MaterialIcons name='delivery-dining' size={24} color="#C67C4E"/>
            </View>

            <View
                className='bg-[#F5F5F5] p-2 rounded-xl mr-2'
            >
                <FontAwesome name="coffee" size={24} color="#C67C4E" />
            </View>

            <View
                className='bg-[#F5F5F5] p-2 rounded-xl mr-2'
            >
                <MaterialCommunityIcons name='food-croissant' size={24} color="#C67C4E"/>
            </View>

        </View>
        </View>

        <View
            className='flex-row pl-2'
        >
            <AntDesign name="star" size={24} color="#FBBE21" />
            <Text
                className='pl-2 text-xl mt-1 font-[Sora-SemiBold] text-[#242424]'
            >
                {rating}
            </Text>
        </View>

        <View
            className='w-full items-center'
        >
            <View
                className='w-[90%] border-b border-[#E3E3E3] my-4'
            />

        </View>
      </View>
    </>
  );
};

export default DetailsHeader;
