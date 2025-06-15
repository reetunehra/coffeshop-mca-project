import { Stack } from "expo-router";
import "@/global.css";
import { useFonts } from "expo-font";
import { CartProvider } from "@/components/CartContext";
import { RootSiblingParent } from "react-native-root-siblings";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Sora-SemiBold": require("@/assets/fonts/Sora-SemiBold.ttf"),
    "Sora-Bold": require("@/assets/fonts/Sora-Bold.ttf"),
    "Sora-Regular": require("@/assets/fonts/Sora-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }
  return (
    <CartProvider>
      <RootSiblingParent>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="details"
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="thankyou"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </RootSiblingParent>
    </CartProvider>
  );
}
