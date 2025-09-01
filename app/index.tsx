import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const isAuthenticated = false; 

  if (!isAuthenticated) return <Redirect href="/sign-in" />;
  return (
    <View className="items-center justify-center flex-1 bg-white">
      <Text className="text-5xl text-center text-blue-500 font-quicksand-bold">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}
