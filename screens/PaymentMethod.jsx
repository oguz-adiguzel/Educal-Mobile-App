import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PaymentCard from '../components/Profile/Cards/PaymentCard'
import { useNavigation } from '@react-navigation/native'

const PaymentMethod = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, alignItems: 'stretch', }} className='w-[95%] mx-auto'>
            <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} className='mt-1'>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image className='' source={require('../assets/arrow-left.png')} />
                </TouchableOpacity>

                <Text className='text-center text-lg'>Ödeme Yöntemleri</Text>

                <TouchableOpacity>
                    <Image className='' source={require('../assets/plus-icon.png')} />
                </TouchableOpacity>
            </SafeAreaView>

            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >
                <Text className='mt-3 text-[#9E9E9E] text-sm'>Ödeme Kartlarınız</Text>
                <PaymentCard bgColor={'#242424'} />
                <PaymentCard bgColor={'#9C3DA5'} />
            </ScrollView>

            <SafeAreaView className='w-full mx-auto mb-2'>
                <TouchableOpacity className='w-[90%] bg-blue-500 mx-auto py-4 rounded-full'>
                    <Text className='text-white text-center text-base tracking-widest font-bold'>Kaydet</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

export default PaymentMethod