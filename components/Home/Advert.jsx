import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import React from "react";

const Advert = () => {
  return (
    <View
    className='mt-10'
    //   style={{ flexDirection: "row", justifyContent: "space-between" }}
    //   className="w-[90%] bg-[#FAB020] mx-auto mt-10 rounded-xl h-44"
    >
      <View  style={styles.container} className="w-full px-2 mt-3">
        <ImageBackground
          source={require("../../assets/info-1.png")}
          style={styles.background}
          resizeMode="cover"
          
        >
        
        <Text className="text-white text-2xl mt-10 ml-5">Kurumsal Eğitimlerde</Text>
        <Text className="text-white text-2xl ml-5">Süper Fırsatlar</Text>
        <Text className="text-white text-sm my-5 ml-5">
          %25 ‘den başlayan İndirimler
        </Text>
        <View
          style={{ justifyContent: "center" }}
          className="w-24 h-8 ml-5 bg-white rounded-full text-center text-[#FAB020]"
        >
          <Text className="text-blue-700 text-center">İncele</Text>
        </View>
        </ImageBackground>
      </View>

      <View  style={styles.container} className="w-full px-2 mt-5">
        <ImageBackground
          source={require("../../assets/info2.png")}
          style={styles.background}
          resizeMode="cover"
          
        >
        
        <Text className="text-white text-2xl mt-10 ml-5">Kurumsal Eğitimlerde</Text>
        <Text className="text-white text-2xl ml-5">Şirkette Eğitim</Text>
        <Text className="text-white text-2xl ml-5">Fırsatı</Text>
        <Text className="text-white text-sm my-1 ml-5">
          Eğitmenlerimiz yanınızda
        </Text>
        <View
          style={{ justifyContent: "center" }}
          className="w-24 h-8 ml-5 bg-white rounded-full text-center mt-2"
        >
          <Text className="text-blue-700 text-center">İncele</Text>
        </View>
        </ImageBackground>
      </View>

      <View  style={styles.container} className="w-full px-2 mt-3">
        <ImageBackground
          source={require("../../assets/info-3.png")}
          style={styles.background}
          resizeMode="cover"
          
        >
        
        <Text className="text-white text-2xl mt-10 ml-5">Eğitmenler İçin</Text>
        <Text className="text-white text-2xl ml-5">Düşük Komisyon</Text>
        <Text className="text-white text-2xl ml-5">Oranları</Text>
        <Text className="text-white text-sm my-1 ml-5">
          %5 ‘den başlayan komisyonlar
        </Text>
        <View
          style={{ justifyContent: "center" }}
          className="w-24 h-8 ml-5 bg-white rounded-full text-center mt-2"
        >
          <Text className="text-blue-700 text-center">İncele</Text>
        </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Advert;

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
