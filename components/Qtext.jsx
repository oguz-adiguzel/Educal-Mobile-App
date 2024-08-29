import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Qtext = ({ text }) => {
  return (
    <View>
      <Text style={{ fontFamily: "primary" }}>{text}</Text>
    </View>
  );
};

export default Qtext;

const styles = StyleSheet.create({});
