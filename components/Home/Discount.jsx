import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";

const Discount = () => {
    const data = [{},{},];
    return (
        <View className='w-[90%] mx-auto mt-5'>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text className='text-xl font-light'>İndirimdekiler</Text>
                <Text className='text-[#FFB23F] text- font-normal'>Tümü</Text>
            </View>
            <View className='mt-5'>
                <FlatList
                    data={data}
                    numColumns={2} // İki sütunlu bir grid yapısı oluşturmak için
                    keyExtractor={(item) => item.id}
                    renderItem={(index) => (
                        <View key={index} style={{ flex: 1, margin: 6 }}>
                            <ProductCard />
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

export default Discount;

const styles = StyleSheet.create({});