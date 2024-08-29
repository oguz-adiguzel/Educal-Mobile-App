import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import React from "react";

const DiscountCard = () => {
  return (
    <View
    //   style={{ flexDirection: "row", justifyContent: "space-between" }}
    //   className="w-[90%] bg-[#FAB020] mx-auto mt-10 rounded-xl h-44"
    >
      <View  style={styles.container} className="w-full px-2 mt-3">
        <ImageBackground
          source={require("../../assets/info-1.png")}
          style={styles.background}
          resizeMode="cover"
          
        >
        
        <Text className="text-white text-2xl mt-10 ml-5">Size Özel İndirim</Text>
        <Text className="text-white text-2xl ml-5">Fırsatları </Text>
        <Text className="text-white text-sm my-5 ml-5">
          %50 ‘den başlayan İndirimler
        </Text>
        <View
          style={{ justifyContent: "center" }}
          className="w-24 h-8 ml-5 bg-white rounded-full text-center text-[#FAB020]"
        >
          <Text className="text-[#FAB020] text-center">İncele</Text>
        </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default DiscountCard;

const styles = StyleSheet.create({
    container: {
    //   width:'100%',
      height:230
    },
    background: {
      flex: 1,
    // width:'100%',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    },
    content: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparan arka plan
      padding: 20,
      borderRadius: 10,
    },
    text: {
      color: 'white',
      fontSize: 24,
    },
  });
