import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";


const ProductCard = ({item, categories, teacher, teacherPhoto}) => {
  const navigation = useNavigation();

  const getCategory = () => {
    let a = categories?.find((cat) => cat._id === item?.category);
    return a?.name;
  };

  return (
    <View className="w-full h-auto bg-white mt-5 pt-5 rounded-lg shadow-md">
      <View className="w-full h-auto relative">
        <View className="px-2 py-1 bg-purple-500 absolute z-10 top-2 left-2">
          <Text className="text-white font-bold text-center my-auto">{getCategory()}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", { slug: item?.slug })}>
          <View className='w-full h-60'>
          <Image
            className="w-full h-full object-contain"
            source={{uri:item?.photoUrl}}
          />
          </View>       
        </TouchableOpacity>
      </View>
      <View
        className="mt-5 w-full px-3"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          className="space-x-1"
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Entypo name="laptop" size={16} color="black" />
          <Text>Lesson</Text>
        </View>

        <View
          className="space-x-1"
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <AntDesign name="star" size={16} color="orange" />
          <Text>(2)</Text>
        </View>
      </View>
      <View className="mt-3">
        <Text className="text-lg ml-2 font-bold">
          {item?.name}
        </Text>
      </View>
      <View
        className="mt-4 space-x-2 ml-3"
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <View className="w-10 h-10 border-2 border-blue-500 rounded-full">
          <Image className='w-full h-full rounded-full' source={teacherPhoto ? {uri:teacherPhoto} : {uri: item?.user.photoUrl}} />
        </View>
        <Text className="text-gray-500">{teacher ? teacher : item?.user.name}</Text>
      </View>
      <View className="w-full mt-5 py-5 border-t border-gray-300">
        <Text className="ml-3 text-gray-400">Know Details</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
