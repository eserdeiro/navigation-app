import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "indigo",
        headerShown: false,
        // tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          title: "Stack",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="stack-overflow" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="other/index"
        options={{
          title: "Otherrrrr",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="adjust" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
