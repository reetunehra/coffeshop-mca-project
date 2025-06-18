import { ScrollView, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { MessageInterface } from "@/types/types";
import MessageItem from "./MessageItem";
import { heightPercentageToDP } from "react-native-responsive-screen";
import TypingIndicator from "./TypingIndicator";

interface MessageListProps {
  messages: MessageInterface[];
  isTyping: boolean;
}
const MessageList = ({ messages, isTyping }: MessageListProps) => {
  const ScrollViewRef = useRef<ScrollView | null>(null);
  useEffect(() => {
    ScrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);
  return (
    <ScrollView
      ref={ScrollViewRef}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 10 }}
    >
      {messages.map((message, index) => (
        <MessageItem key={index} message={message} />
      ))}
      {isTyping && (
        <View className="w-[80%] ml-3 mb-3">
          <View className="self-start p-3 px-4 rounded-2xl bg-indigo-200 border border-indigo-200">
            <Text style={{ fontSize: heightPercentageToDP(1.9) }}>
              <TypingIndicator />
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default MessageList;
