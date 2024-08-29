import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ShowCase = () => {
  const [data, setData] = useState();
  const [limitedData, setLimitedData] = useState() 

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://educal-api.onrender.com/courses"
      );
      setData(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setLimitedData( data?.courses.slice(0, 5))
  }, [data])
  
  return (
    <View className="w-[100%] px-5 py-5 mx-auto mt-8 bg-gray-50">
      <View>
        <Text className="text-3xl">Doğruyu bul</Text>
        <Text className="text-3xl font-light">Size Özel Çevrimiçi Kurs</Text>
        <Text className="font-light mt-1 text-sm">
          Tek başına mücadele etmek zorunda değilsin, bizim yardımımızı aldın.
        </Text>
      </View>
      <View className="mt-5">
        {
          limitedData?.map((item, index)=>(
            <View key={index} style={{ flex: 1, margin: 6 }}>
            <ProductCard item={item} categories={data?.categories} />
          </View>
          ))
        }
        {/* <FlatList
          data={limitedData}
          //   horizontal
          renderItem={({ item, index }) => (
            <View key={index} style={{ flex: 1, margin: 6 }}>
              <ProductCard item={item} categories={data?.categories} />
            </View>
          )}
        /> */}
      </View>
    </View>
  );
};

export default ShowCase;

const styles = StyleSheet.create({});
