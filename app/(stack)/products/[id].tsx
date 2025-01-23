import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { products } from "@/store/products.store";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const product = products.find((product) => product.id == id);

  if (!product) {
    return <Redirect href="/" />;
  }

  const { title, price, description } = product;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontSize: 18,
            lineHeight: 28,
            fontFamily: "WorkSans-Black",
          }}
        >
          {product.title}
        </Text>
      ),
    });
  }, [navigation, title]);

  return (
    <View className="px-5 mt-10">
      <Text className="font-nunito-black text-2xl">{title}</Text>
      <Text>{description}</Text>
      <Text className="font-nunito-black  ">{price}</Text>
    </View>
  );
};

export default ProductScreen;
