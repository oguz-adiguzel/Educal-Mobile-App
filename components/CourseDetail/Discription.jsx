import { View, Text, useWindowDimensions, StyleSheet, ScrollView } from "react-native";
import React from "react";
import RenderHtml from "react-native-render-html";

const Discription = ({ data }) => {
  const { width } = useWindowDimensions();

  return (
    <View className="w-full">
        <Text className="mt-8 text-2xl font-light">Kursa Genel Bakış</Text>
        <View>
          <RenderHtml contentWidth={width} source={{ html: data }} />
        </View>
    </View>
  );
};

export default Discription;
