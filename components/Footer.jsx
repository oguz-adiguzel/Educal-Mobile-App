import { View, Text, Image } from 'react-native'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react'

const Footer = () => {
  return (
    <View className='bg-[#0E1133] py-5 px-2 mt-8 mb-5'>
      <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
      <Image className='w-auto h-auto' source={require('../assets/logo-2.png')} />
      <Text className='text-white text-xl ml-1 font-bold'>Sosyal Medya</Text>
      </View>
      <Text className='text-gray-300 mt-3'>Bizi sosyal medyadan takip edip kampanyalarımızdan ve yeni eğitimlerimizden haberdar olun!</Text>
        <View className='space-x-2 mt-3' style={{flexDirection:'row'}}>
            <View style={{justifyContent:'center', alignItems:'center'}} className='w-12 h-12 rounded-md bg-blue-700'>
            <EvilIcons name="sc-facebook" size={32} color="white" />
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}} className='w-12 h-12 rounded-md bg-blue-400'>
            <Entypo name="twitter" size={24} color="white" />
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}} className='w-12 h-12 rounded-md bg-red-600'>
            <Entypo name="pinterest" size={22} color="white" />
            </View>
        </View>
    </View>
  )
}

export default Footer