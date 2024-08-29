import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import LogoSVG from "../svg/LogoSVG.jsx";
import { useNavigation } from "@react-navigation/native";

const Landing = () => {
  const navigation = useNavigation();

  // setTimeout(() => {
  //   navigation.navigate('Anasayfa')
  // }, 2000)
  
  return (
    <View className="container flex mx-auto w-[95%] h-screen">
      <View className="flex-1">
        <Pressable onPress={() => navigation.navigate('Anasayfa') }>
        <Image className='w-40 h-10' source={require('../../assets/logo.png')} />
        </Pressable>
        <View className="w-full h-[1px] bg-slate-400 my-3"></View>
      </View>
      <View className="flex-3">
        <Text
          style={{ fontFamily: "primary" }}
          className="text-[90px] sm:text-[180px]"
          
        >
          Educal İle Keşfet, Öğren, Öğret
        </Text>
      </View>
      <View className="flex-1">
        <Text style={{ fontFamily: "primary" }} className="text-2xl">
          Birbirinden popüler eğitimlerin yüzlerce farklı eğitmenin yer aldığı
          Educall’de aradığını bulacaksın !
        </Text>
      </View>
      <View className="flex-1">
        <View className="flex-row justify-between">
          <Text
            style={{ fontFamily: "primary" }}
            className="border border-blue-400 text-blue-400 flex-1 text-center m-2 py-8 rounded-[50px] text-xl"
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          >
            Üye Ol
          </Text>
          <Text
            style={{ fontFamily: "primary" }}
            className="border border-blue-500 text-white bg-blue-400 flex-1 text-center m-2 py-8 rounded-[50px] text-xl"
            onPress={() => navigation.navigate("Login")}
          >
            Giriş Yap
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({});
