import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const AddressCard = () => {
    return (
        <View className='w-full bg-[#FFFFFF] py-3 px-3 rounded-xl'>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text className='text-base'>Marshal D. Teach</Text>
                <TouchableOpacity>
                    <View className='w-1 h-1 rounded-full bg-[#9E9E9E]'></View>
                    <View className='w-1 h-1 rounded-full bg-[#9E9E9E] mt-1'></View>
                    <View className='w-1 h-1 rounded-full bg-[#9E9E9E] mt-1'></View>
                </TouchableOpacity>
            </View>
            <View className='mt-3' style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../../../assets/phone-icon.png')} />
                <Text className='text-[#9E9E9E] ml-2 text-sm'>082265746687</Text>
            </View>
            <View className='mt-3' style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../../../assets/location-icon.png')} />
                <Text className='text-[#9E9E9E] ml-2 text-sm'>Lorem ipsum dolor sit amet consectetur. Sapien ac sollicitudin egestas id eget pellentesque.Lorem  </Text>
            </View>

            <View className='mt-3' style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{justifyContent:'center', alignItems:'center'}} className='w-8 h-8 rounded-full bg-[#FFB23F]'>
                    <Image className='w-4 h-3' source={require('../../../assets/tick-icon.png')} />
                </View>
                <Text className='ml-2 text-sm'>Varsayılan Adres Olarak Kullan</Text>
            </View>
        </View>
    )
}

export default AddressCard