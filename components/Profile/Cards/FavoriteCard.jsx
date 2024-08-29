import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const FavoriteCard = () => {
  return (
    <View className='w-full mt-1 bg-[#FFFFFF] py-3 px-2 rounded-2xl shadow-md'>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} className='border-b border-[#EDEDED] py-3'>
                <View className='w-2/6'>
                    <Image className='w-28 h-28 rounded-xl' source={require('../../../assets/product/product4.jpg')} />
                </View>
                <View className='w-3/6 pl-1'>
                    <Text className='text-lg'>Rick Owens Jacket</Text>
                    <View className='mt-2' style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text className='text-sm text-[#CACACA]'>Size :</Text>
                        <Text className='text-sm ml-1'>M</Text>
                    </View>
                    <View className='mt-2' style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text className='text-sm text-[#CACACA]'>Color :</Text>
                        <Text className='text-sm ml-1'>Black</Text>
                    </View>
                    <View className='mt-2' style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} className='w-6 h-6 rounded-full bg-[#e0e0e0]'>
                            <Text>--</Text>
                        </TouchableOpacity>
                        <Text className='ml-2'>2</Text>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} className='w-6 h-6 rounded-full bg-[#e0e0e0] ml-2'>
                            <Text>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }} className='h-auto w-1/6'>
                    <Text className='text-[#FFB23F] text-lg'>699 ₺</Text>
                </View>
            </View>
            <View className='mt-3' style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} className='w-14 h-14 shadow-md bg-[#F2F2F2] rounded-full'>
                    <Image source={require('../../../assets/basket-add-icon.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} className='w-72 h-12 rounded-full bg-[#FFB23F]'>
                    <Text className='text-white'>Şimdi Satın Al</Text>
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default FavoriteCard