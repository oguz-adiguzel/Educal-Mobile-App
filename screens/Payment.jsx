import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AddressCard from '../components/Profile/Cards/AddressCard'
import { useNavigation } from '@react-navigation/native'

const Payment = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, alignItems: 'stretch' }} className='w-[95%] mx-auto mt-3'>
            <SafeAreaView className='relative'>
                <Text className='text-center text-lg'>Ödeme</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image className='absolute bottom-0' source={require('../assets/arrow-left.png')} />
                </TouchableOpacity>
            </SafeAreaView>

            <ScrollView>
            
                <View className='mt-3' style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>Teslimat Adresi</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Address')}>
                        <Text className='text-[#FFB23F]'>Değiştir</Text>
                    </TouchableOpacity>
                </View>

                <View className='w-full bg-[#FFFFFF] py-3 px-3 rounded-xl mt-3'>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text className='text-base'>Marshal D. Teach</Text>
                    </View>
                    <View className='mt-3' style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/phone-icon.png')} />
                        <Text className='text-[#9E9E9E] ml-2 text-sm'>082265746687</Text>
                    </View>
                    <View className='mt-3' style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/location-icon.png')} />
                        <Text className='text-[#9E9E9E] ml-2 text-sm'>Lorem ipsum dolor sit amet consectetur. Sapien ac sollicitudin egestas id eget pellentesque.Lorem  </Text>
                    </View>
                </View>

                <View className='mt-10' style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>Ödeme Yöntemi</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('OdemeYontemleri')}>
                        <Text className='text-[#FFB23F]'>Değiştir</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }} className='mt-2'>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }} className='w-20 h-12 rounded-lg bg-[#FFFFFF] shadow-lg'>
                        <Image className='mt-1' source={require('../assets/mastercard.png')} />
                    </View>
                    <Text className='ml-4 text-lg'>**** **** **** 3747</Text>
                </View>

                <View className='mt-10' style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>Teslimat Yöntemi</Text>
                </View>

                <View className='mt-2' style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{justifyContent:'center', alignItems:'center'}} className='w-28 h-20 bg-white rounded-lg'>
                        <Image source={require('../assets/fedex.png')} />
                        <Text className='mt-1 text-sm text-[#9B9B9B]'>2-3 gün</Text>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}} className='w-28 h-20 bg-white rounded-lg'>
                        <Image source={require('../assets/usps.png')} />
                        <Text className='mt-1 text-sm text-[#9B9B9B]'>2-3 gün</Text>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}} className='w-28 h-20 bg-white rounded-lg'>
                        <Image source={require('../assets/dhl.png')} />
                        <Text className='mt-1 text-sm text-[#9B9B9B]'>2-3 gün</Text>
                    </View>
                </View>

            </ScrollView>

            <SafeAreaView className='py-2'>
                <TouchableOpacity className='w-[90%] bg-[#FFB23F] mx-auto py-4 rounded-full'>
                    <Text className='text-white text-center text-sm tracking-widest font-bold'>İlerle</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

export default Payment