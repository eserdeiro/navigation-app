import React from "react";
import { router, Stack, useNavigation } from "expo-router";
import { View, Text } from "react-native";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack: boolean | undefined) => {
    if (canGoBack) {
      router.back();
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        // contentStyle: {backgroundColor: 'red'}
        headerLeft: ({ canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back-outline" : "menu"}
            size={22}
            className="pr-4"
            onPress={() => onHeaderLeftClick(canGoBack)}
          />
        ),
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

      <Stack.Screen
        name="settings/index"
        options={{ title: "Settings screen" }}
      />
    </Stack>
  );
};

export default StackLayout;
