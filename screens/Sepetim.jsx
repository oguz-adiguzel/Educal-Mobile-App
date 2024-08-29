import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";

import axios from "axios";
import ProductCard from "../components/Home/ProductCard";

const Sepetim = () => {
  const [data, setData] = useState();
  const [filterId, setFilterId] = useState('tümü');
  const [filterData, setFilterData] = useState()
  const [categoryData, setCategoryData] = useState();

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://educal-api.onrender.com/categories/getCategories"
      );
      setCategoryData(response.data.categories);
    } catch (error) {
      console.log("error", error);
    }
  };

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

  const filteredData = () => {
    if(filterId === 'tümü'){
      setFilterData(data?.courses)
    }else{
      let newData = data?.courses.filter((item) => item.category === filterId)
      setFilterData(newData)
    }
  };

  useEffect(() => {
    getData();
    getCategories();
  }, []);

  useEffect(() => {
    filteredData()
  }, [data])
  

  useEffect(() => {
    filteredData()
  }, [filterId])
  

  // console.log("data", data);

  return (
    <View className="w-[100%] px-5 py-5 mx-auto bg-gray-100">
      <View className='py-1'>
        <View className='bg-gray-200 rounded-full'>
          <Picker
            selectedValue={filterId}
            style={{
              height: 60,
            }}
            onValueChange={(itemValue, itemIndex) => setFilterId(itemValue)}
          >
            <Picker.Item color="grey" label="Tümü" value="tümü" />
            {categoryData?.map((item) => (
              <Picker.Item color="grey" label={item.name} value={item._id} />
            ))}
          </Picker>
        </View>
      </View>
     { filterData?.length !== 0 ? <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
      <View  className="mt-5">
        {
          filterData?.map((item, index)=>(
            <View key={index} style={{ flex: 1, margin: 6 }}>
              <ProductCard item={item} categories={data?.categories} />
              {/* <Text>Card</Text> */}
            </View>
          ))
        }
       
      </View>
        </ScrollView> : <Text className='text-center mt-10 text-lg text-gray-400'>Kategoriye Uygun Kurs Bulunmamaktadır</Text> 
        }
    </View>
    
  );
};

export default Sepetim;
