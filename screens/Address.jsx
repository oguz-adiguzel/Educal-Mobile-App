import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import AddressCard from '../components/Profile/Cards/AddressCard'

const Address = () => {
    const navigation = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'stretch', }} className='w-[95%] mx-auto'>
            <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} className='mt-1'>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image className='' source={require('../assets/arrow-left.png')} />
                </TouchableOpacity>

                <Text className='text-center text-lg'>Teslimat Adresi</Text>

                <TouchableOpacity>
                    <Text className='text-[#FFB23F]'>Yeni Ekle</Text>
                </TouchableOpacity>
            </SafeAreaView>

            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >
                <View className='mt-4'>
                    <AddressCard />
                </View>
                <View className='mt-4'>
                    <AddressCard />
                </View>
                <View className='mt-4'>
                    <AddressCard />
                </View>
                <View className='mt-4'>
                    <AddressCard />
                </View>
            </ScrollView>
        </View>
  )
}

export default Address