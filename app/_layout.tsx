//rnfe

import React, { useEffect } from "react";
import { Slot, SplashScreen, Stack } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [isLoaded, error] = useFonts({
    "Nunito-Black": require("../assets/fonts/nunito/Nunito-Black.ttf"),
    "Nunito-Light": require("../assets/fonts/nunito/Nunito-Light.ttf"),
    "Nunito-Medium": require("../assets/fonts/nunito/Nunito-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (isLoaded) SplashScreen.hideAsync();
  }, [isLoaded, error]);

  if (!isLoaded && !error) return null;

  return (
    <>
      <Slot />
    </>
  );
};

export default RootLayout;
