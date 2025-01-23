import React from "react";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        // contentStyle: {backgroundColor: 'red'}
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Home screen",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{ title: "Products screen", animation: "fade_from_bottom" }}
      />

      <Stack.Screen
        name="profile/index"
        options={{ title: "Profile screen" }}
      />
    </Stack>
  );
};

export default StackLayout;
