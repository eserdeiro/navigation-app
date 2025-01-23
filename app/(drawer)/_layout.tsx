import { View, Text } from "react-native";
import React from "react";
import Drawer from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import CustomDrawer from "@/components/shared/CustomDrawer";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: "rgba(0,0,0,0.4)",
        drawerActiveTintColor: "indigo",
        headerShadowVisible: false,
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          drawerLabel: "Tabs",
          title: "Tabsssss",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: "Schedule",
          title: "Scheduleeeee",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: "User",
          title: "Userrrrr",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="airplane" color={color} size={size} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
