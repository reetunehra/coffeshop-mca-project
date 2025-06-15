import { Text, View } from "react-native";
import React from "react";
import { usePageHeader } from "@/components/PageHeader";

const ChatRoom = () => {
  usePageHeader({
    title: "Chatroom",
    showHeaderRight: true,
    bgColor: "#F9F9F9",
  });
  return (
    <View>
      <Text>ChatRoom</Text>
    </View>
  );
};

export default ChatRoom;
