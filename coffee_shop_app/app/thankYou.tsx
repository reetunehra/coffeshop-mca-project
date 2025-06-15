import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { usePageHeader } from "@/components/PageHeader";
import { router } from "expo-router";

const thankYou = () => {
    usePageHeader({ title: "", showHeaderRight: false, showHeaderLeft: false,  bgColor: "#F9F9F9" });
  return (
    <GestureHandlerRootView>
      <View className="w-full h-full items-center justify-center">
        <Text className="text-3xl font-[Sora-SemiBold] text-center mx-10 mb-5">
          Thank You For Your Order
        </Text>
     

      <TouchableOpacity
        className="bg-app_orange_color w-[80%] rounded-2xl items-center justify-center mt-3 mx-4 px-4 py-3"
        onPress={() => router.push("/(tabs)/home")}
      >
        <Text className="text-xl color-white font-[Sora-Regular] ">
          Return To Home Page
        </Text>
      </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default thankYou;
