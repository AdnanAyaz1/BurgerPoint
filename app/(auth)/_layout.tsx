import { images } from "@/constants";
import { Slot } from "expo-router";
import { Dimensions, Image, ImageBackground, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AuthLayout() {
  const insets = useSafeAreaInsets();
  const maxHeight = Dimensions.get("window").height - insets.bottom;
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: "#ffffff" }}
      contentContainerStyle={{ maxHeight: maxHeight }}
      enableOnAndroid={true}
      extraScrollHeight={50}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View
        className="relative w-full"
        style={{ height: Dimensions.get("window").height / 2.25 }}
      >
        <ImageBackground
          source={images.loginGraphic}
          className="rounded-b-lg size-full"
          resizeMode="stretch"
        />
        <Image
          source={images.logo}
          className="absolute z-10 self-center size-48 -bottom-16"
        />
      </View>

      <Slot />
    </KeyboardAwareScrollView>
  );
}
