import { View, Text, Button, StyleSheet } from "react-native";
import React, { useCallback, useState } from "react";
// import YouTubePlayer from 'react-native-youtube-iframe';
// import { WebView } from 'react-native-webview';
// import ReactPlayer from 'react-player'
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from '@expo/vector-icons/Feather';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";

const Curriculum = ({ data }) => {
  return (
    <View className="py-2">
      <Collapse>
        <CollapseHeader>
          <View className="w-full py-5 pl-4 bg-white rounded-xl border border-gray-300">
            <Text className="text-lg">Hafta 1</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View className="bg-white w-full mt-1 px-7 py-4 rounded-xl">
            <View className='py-4 border-b border-gray-400'>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons
                  name="document-text-outline"
                  size={24}
                  color="black"
                />
                <Text className="text-gray-600 ml-1 ">Reading :</Text>
                <Text className="ml-1">Ut enim ad minim veniam</Text>
              </View>
              <View className='mt-4' style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="clockcircleo" size={24} color="black" />
                <Text className="ml-1">14 minutes</Text>
              </View>
              <View style={{justifyContent:'center', alignItems:'center'}} className='w-32 h-9 mt-4 py-1 bg-pink-500 rounded-full'>
                <Text className='text-white'>2 questions</Text>
              </View>
            </View>
            <View className='py-4 border-b border-gray-400'>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="video" size={24} color="black" />
                <Text className="text-gray-600 ml-1 ">Video :</Text>
                <Text className="ml-1">Ut enim ad minim veniam</Text>
              </View>
              <View className='mt-4' style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="clockcircleo" size={24} color="black" />
                <Text className="ml-1">14 minutes</Text>
              </View>
            </View>
            <View className='py-4 border-b border-gray-400'>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="headphones" size={24} color="black" />
                <Text className="text-gray-600 ml-1 ">Audio :</Text>
                <Text className="ml-1">Ut enim ad minim veniam</Text>
              </View>
              <View className='mt-4' style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="clockcircleo" size={24} color="black" />
                <Text className="ml-1">17 minutes</Text>
              </View>
              <View style={{justifyContent:'center', alignItems:'center'}} className='w-32 h-9 mt-4 py-1 bg-pink-500 rounded-full'>
                <Text className='text-white'>3 questions</Text>
              </View>
            </View>
          </View>
        </CollapseBody>
      </Collapse>
    </View>
  );
};

export default Curriculum;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
