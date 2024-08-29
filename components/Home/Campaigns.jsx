import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper";
import axios from "axios";

const Campaigns = () => {
  // const data = [{}];
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhoto();
  }, []);

  ("photos", photos);

  const getPhoto = async () => {
    try {
      const response = await axios.get("https://educal-api.onrender.com/main");
      setPhotos(response.data.photo);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <View className="w-[90%] mx-auto mt-5">
      <View
        style={{
          flexDirection: "col",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Text className="text-5xl font-bold">2700+</Text>
        <Text className="text-5xl font-light">Çevrimiçi</Text>
        <Text className="text-5xl font-bold">En İyi Eğitmenler</Text>
        <Text className='font-light text-sm'>Deneyimlerini paylaşacak üniversite ve kültür kurumlarıyla tanışın</Text>
        {/* <Text className='text-[#FFB23F] text- font-normal'>Tümü</Text> */}
      </View>
      <View className="">
        {/* <Swiper style={styles.wrapper} loop={false}> */}
        {/* {photos.map((image, index) => ( */}
          <View className='relative mt-5' style={{flexDirection:'row', justifyContent:'center'}}>
            <View className='w-72 h-72 border-2 border-red-400 rounded-full absolute -bottom-7 -right-4'></View>
            <View className='w-52 h-52 bg-purple-200 rounded-full absolute top-1'></View>
            {
                photos?.filter((item)=> item.name === 'big').map((item)=>(
                    <Image
                    className="my-8 rounded-tl-[50px] rounded-br-[50px] mx-auto"
                    source={{ uri: item.photoUrl }}
                    style={styles.image}
                  />
                ))
            }
           
          </View>
        {/* ))} */}
        {/* </Swiper> */}
      </View>
    </View>
  );
};

export default Campaigns;

const styles = StyleSheet.create({
  wrapper: {
    height: 220,
  },
  slide: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  imageContainer: {
    flexDirection: "row",
  },
  image:{
    width:'90%',
    height:350
  }
});
