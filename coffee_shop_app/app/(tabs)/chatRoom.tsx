import { Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { usePageHeader } from "@/components/PageHeader";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import { MessageInterface } from "@/types/types";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";
import MessageList from "@/components/MessageList";
import { callChatBotAPI } from "@/services/chatbotService";
import { useCart } from "@/components/CartContext";

const ChatRoom = () => {
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const textRef = useRef("");
  const inputRef = useRef<TextInput>(null);

  const { addToCart, emptyCart } = useCart();

  const handleSendMessage = async () => {
    let message = textRef.current.trim();
    if (!message) return;
    try {
      let InputMessages = [...messages, { content: message, role: "user" }];
      setMessages(InputMessages);
      textRef.current = "";
      if (inputRef) inputRef?.current?.clear();
      setIsTyping(true);
      console.log(InputMessages);
      let responseMessage = await callChatBotAPI(InputMessages);
      setIsTyping(false);
      setMessages([...InputMessages, responseMessage]);
      console.log(responseMessage);
      if (responseMessage) {
        if (responseMessage?.memory) {
          if (responseMessage?.memory?.order) {
            emptyCart();
            responseMessage?.memory?.order?.forEach((item: any) => {
              addToCart(item?.item, item?.quantity);
            });
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  usePageHeader({
    title: "Chatbot",
    showHeaderRight: false,
    bgColor: "#F9F9F9",
  });
  return (
    <GestureHandlerRootView>
      <View className="flex-1 justify-between bg-neutral-100 overflow-visible">
        <View className="flex-1">
          <MessageList isTyping={isTyping} messages={messages} />
        </View>
        <View className="flex-row mx-3 mb-5 justify-between border p-2 bg-white border-neutral-300 rounded-full pl-5">
          <TextInput
            ref={inputRef}
            onChangeText={(value) => (textRef.current = value)}
            placeholder="Type a message...."
            style={{ fontSize: hp(2) }}
            className="flex-1 mr-2 rounded-full"
          />
          <TouchableOpacity
            className="bg-neutral-200 p-2 flex items-center justify-center mr-[1px] rounded-full"
            onPress={handleSendMessage}
          >
            <Feather name="send" size={hp(2.7)} color="#737373" />
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default ChatRoom;
