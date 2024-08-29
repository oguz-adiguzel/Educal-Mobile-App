import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductCard from "../Home/ProductCard";

const ShopOpportunity = () => {
  const data = [{}, {},{},{}];
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} >
      <View className='w-[90%] mx-auto mt-5'>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text className='text-lg font-light'>Fırsat Ürünleri</Text>
          <Text className='text-[#FFB23F] text- font-normal'>Tümü</Text>
        </View>
        <View className='mt-5'>
          <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={(index) => (
              <View style={{ flex: 1, margin: 6 }}>
                <ProductCard />
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ShopOpportunity;

const styles = StyleSheet.create({});