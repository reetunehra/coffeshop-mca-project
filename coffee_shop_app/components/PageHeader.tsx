import { useNavigation, router } from "expo-router";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { useLayoutEffect } from "react";

interface HeaderProps {
  name?: string;
  title: string;
  showHeaderRight: boolean;
  showHeaderLeft?: boolean;
  bgColor: string;
}

export const usePageHeader = ({
  title,
  showHeaderRight = false,
  bgColor = "#fff",
  showHeaderLeft = true
}: HeaderProps) => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: bgColor,
      },
      headerTitleAlign: "center",

      headerTitle: () => (
        <Text className="text-xl text[#242424] font-[Sora-SemiBold]">
          {title}
        </Text>
      ),
      headerRight: showHeaderRight
        ? () => (
            <FontAwesome5
              name="heart"
              style={{ marginRight: 20 }}
              size={24}
              color="black"
            />
          )
        : undefined,
      headerBackVisible: false,
      headerLeft: showHeaderLeft ? () => (
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome5 name="arrow-left" size={24} style={{ marginLeft: 20 }} color="black" />
        </TouchableOpacity>
      ) : undefined,
    });
  }, [navigation, title, showHeaderRight, bgColor]);
  return null;
};
