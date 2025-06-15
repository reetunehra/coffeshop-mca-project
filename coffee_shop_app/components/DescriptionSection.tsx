import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

interface DetailsInterface {
  description: string;
}

const DescriptionSection = ({ description }: DetailsInterface) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <View>
      <Text className="text-[#242424] text-lg font-[Sora-SemiBold] ml-1">
        Description
      </Text>

      <View className="p-2">
        <Text
          className="text-[#A2A2A2] text-sm font-[Sora-Regular]"
          numberOfLines={expanded ? undefined : 2}
        >
          {expanded ? description : `${description.slice(0,100)} ...`}
        </Text>
        <TouchableOpacity
        onPress={() => setExpanded(!expanded)}
        >
          <Text className="text-app_orange_color text-xs font-[Sora-Regular]">
            {expanded ? "Read Less" : "Read More"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DescriptionSection;

const styles = StyleSheet.create({});
