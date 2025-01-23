import { View, Text } from "react-native";
import React from "react";
import CustomBottom from "@/components/shared/CustomBottom";
import { Link, router, useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <View className="m-4">
      <CustomBottom className="mb-4" onPress={() => router.push("/products")}>
        Productos
      </CustomBottom>

      <CustomBottom
        className="mb-4"
        onPress={() => router.push("/profile")}
        color="secondary"
      >
        Profile
      </CustomBottom>

      <CustomBottom
        className="mb-4"
        onPress={() => router.push("/settings")}
        color="tertiary"
      >
        Settings
      </CustomBottom>

      <CustomBottom className="mb-8" onPress={onToggleDrawer} color="primary">
        Abrir menu
      </CustomBottom>

      {/* <Link href="/products" asChild>
        <CustomBottom color="secondary">Productos</CustomBottom>
      </Link> */}
    </View>
  );
};

export default HomeScreen;
