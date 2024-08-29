import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const OrderCard = () => {
    return (
        <View className='w-full mt-1 bg-[#FFFFFF] py-3 px-2 rounded-2xl shadow-md'>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} className='border-b border-[#EDEDED] py-3'>
                <View className='w-2/6'>
                    <Image className='w-28 h-28 rounded-xl' source={require('../../../assets/product/product4.jpg')} />
                </View>
                <View className='w-3/6 pl-1'>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            className="w-5 h-5 rounded-full"
                            source={require("../../../assets/merchant-logo.png")}
                        />
                        <Text className="text-sm ml-2 font-light">Uniqlo</Text>
                        <Image
                            className="w-3 h-3 rounded-full ml-2"
                            source={require("../../../assets/blue-tick.png")}
                        />
                    </View>
                    <Text className='text-xs text-[#9E9E9E] mt-2'>12 Jan 2022 - On The Way</Text>
                    <View className='mt-2' style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text className='text-sm font-light'>AIRism Set</Text>
                        <Text className='text-xs ml-1 text-[#AEAEAE]'>x1</Text>
                    </View>
                    <Text className='text-sm font-light mt-2'>Black, Large</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} className='h-auto w-1/6'>
                    <Text className='text-[#FFB23F] text-lg'>699 ₺</Text>
                </View>
            </View>
            <View className='mt-3' style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text className='text-[#9E9E9E]'>INV/CODE123123124124</Text>
                <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} className='w-40 h-10 rounded-full bg-[#FFB23F]'>
                    <Text className='text-white'>Takip Et</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderCard