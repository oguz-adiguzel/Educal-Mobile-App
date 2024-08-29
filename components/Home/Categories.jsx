import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper";
import axios from "axios";

const Categories = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://educal-api.onrender.com/categories/getCategories"
      );
      setData(response.data.categories);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <View className="w-[90%] mx-auto mt-8">
      <View
      // style={{
      //   flexDirection: "row",
      //   justifyContent: "space-between",
      //   alignItems: "center",
      // }}
      >
        <Text className="text-3xl">Keşfedin</Text>
        <Text className="text-3xl font-light">Popüler Kurslarımız</Text>
      </View>

      <View
        // style={{ flexDirection: "row", alignItems: "center" }}
        className="h-auto mt-3"
      >
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        {data?.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            className=" mt-3 border px-5 py-3 border-gray-300 rounded-md"
            // key={index}
          >
            <Image
              source={require("../../assets/data-science.png")}
              style={styles.image}
            />
            <Text className="text-lg font-bold ml-1 mt-1 w-40">
              {item.name}
            </Text>
          </View>
        ))}
        {/* <FlatList
            data={data}
            // horizontal
            renderItem={({ item, index }) => (
              <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}} className=' mt-3 border px-5 py-3 border-gray-300 rounded-md' key={index}>
                <Image source={require("../../assets/data-science.png")} style={styles.image} />
                <Text className="text-lg font-bold ml-1 mt-1 w-40">{item.name}</Text>
              </View>
            )}
          /> */}
        {/* </ScrollView> */}
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  wrapper: {
    height: 150,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 16,
    borderRadius: 20,
  },
});
