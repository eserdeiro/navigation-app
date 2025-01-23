import { View, Text } from "react-native";
import React from "react";
import CustomBottom from "@/components/shared/CustomBottom";
import { Link, router } from "expo-router";

const HomeScreen = () => {
  return (
    <View className="m-4">
      <CustomBottom
        className="mb-4"
        onPress={() => router.push("/tabs/(stack)/products")}
      >
        Productos
      </CustomBottom>

      <CustomBottom
        className="mb-4"
        onPress={() => router.push("/tabs/(stack)/profile")}
        color="secondary"
      >
        Profile
      </CustomBottom>

      <CustomBottom
        className="mb-4"
        onPress={() => router.push("/tabs/(stack)/settings")}
        color="tertiary"
      >
        Settings
      </CustomBottom>

      {/* <Link href="/products" asChild>
        <CustomBottom color="secondary">Productos</CustomBottom>
      </Link> */}
    </View>
  );
};

export default HomeScreen;
