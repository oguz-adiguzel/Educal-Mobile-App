import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import ProductCard from "./ProductCard";

const Opportunity = () => {
  const data = [
    {
      url: require("../../assets/aü.png"),
    },
    {
      url: require("../../assets/logoyazilim.png"),
    },
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  return (
    <View className="w-[95%] mx-auto mt-5">
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text className="text-xl font-light">Referanslarımız</Text>
      </View>

      {/* <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={data}
            horizontal
            renderItem={({ item, index }) => (
              <View style={{ flexDirection: "column" }}>
                <Image className="w-24 h-20" source={item.url} />
              </View>
            )}
          />
        </ScrollView>
      </View> */}

      <View className='mt-5' style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className='w-24 h-20'>
          <Image
            className="w-full h-full object-contain "
            source={require("../../assets/aü.png")}
          />
          </View>
          <View className='w-64 ml-5'>
          <Image
            className="w-full h-full object-contain "
            source={require("../../assets/logoyazilim.png")}
          />
          </View>
          <View className='w-72 ml-5'>
          <Image
            className="w-full h-full object-contain "
            source={require("../../assets/bilgeadam.png")}
          />
          </View>
          <View className='w-60 ml-5'>
          <Image
            className="w-full h-full object-contain "
            source={require("../../assets/trendyol.png")}
          />
          </View>
          <View className='w-60 ml-5'>
          <Image
            className="w-full h-full object-contain "
            source={require("../../assets/hepsiburada.jpg")}
          />
          </View>
          <View className='w-20  ml-5'>
          <Image
            className="w-full h-full object-contain "
            source={require("../../assets/getir.png")}
          />
          </View>
          <View className='w-52  ml-5'>
          <Image
            className="w-full h-full object-contain "
            source={require("../../assets/tsoft.png")}
          />
          </View>
          <View className='w-72 -ml-5'>
          <Image
            className="w-full h-full object-contain "
            source={require("../../assets/akinon.png")}
          />
          </View>
        
        </ScrollView>
      </View>

      <View className="mt-5">
        {/* {data.map((item, index) => (
          <View key={index} style={{ flex: 1, margin: 6 }}>
            <ProductCard />
          </View>
        ))} */}
        {/* <FlatList
                    data={data}
                    numColumns={2} // İki sütunlu bir grid yapısı oluşturmak için
                    keyExtractor={(item) => item.id}
                    renderItem={(index) => (
                        <View key={index} style={{ flex: 1, margin: 6 }}>
                            <ProductCard />
                        </View>
                    )}
                /> */}
      </View>
    </View>
  );
};

export default Opportunity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
  },
});
