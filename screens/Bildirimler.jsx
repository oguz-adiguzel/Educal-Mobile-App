import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/native";


const Bildirimler = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} className='w-[95%] mx-auto mt-2'>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image className='w-7' source={require('../assets/arrow-left.png')} />
                </TouchableOpacity>
                <Text className='ml-6 text-lg'>Bildirimler</Text>
                <TouchableOpacity className='bg-[#FFB23F] px-4 py-2 rounded-full'>
                    <Text className='text-white  text-xs'>2 Yeni</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'stretch' }}>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                    <View className='mt-5 w-[95%] mx-auto' style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text className='text-[#9E9E9E] text-xs'>Bugün</Text>
                        <Text className='text-[#FFB23F] text-xs'>Okundu Olarak İşaretle</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} className='w-[95%] mx-auto mt-6'>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} className='w-12 h-12 bg-[#D2F2E166] rounded-full'>
                            <Image className='w-7' source={require('../assets/truck-fast.png')} />
                        </View>
                        <View className='w-5/6'>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text className='text-[#242424] text-base'>Kargo Yola Çıktı !</Text>
                                <Text className='text-[#9E9E9E] text-xs'>1h</Text>
                            </View>
                            <Text className='mt-1 text-[#757575] text-xs'>Congratulations - your appointment is confirmed! We're looking forward to meeting with you and helping you achieve your goals.</Text>
                        </View>
                    </View>
                    <View className='w-full bg-[#dfdfdf] pt-3 pb-8 mt-2'>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} className='w-[95%] mx-auto'>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }} className='w-12 h-12 bg-[#D2F2E166] rounded-full'>
                                <Image className='w-6' source={require('../assets/star-icon.png')} />
                            </View>
                            <View className='w-5/6'>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text className='text-[#242424] text-base'>Yorumunuz yayında !</Text>
                                    <Text className='text-[#9E9E9E] text-xs'>1h</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text className='mt-1 text-[#757575] text-xs'>You have successfully changed your appointment with Dr. Randy Wigham. Don’t forget to active your reminder.</Text>
                                    <View className='w-2 h-2 rounded-full ml-2 bg-[#E02849]'>

                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} className='w-[95%] mx-auto mt-6'>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} className='w-12 h-12 bg-[#D2F2E166] rounded-full'>
                            <Image className='w-6' source={require('../assets/payment-icon.png')} />
                        </View>
                        <View className='w-5/6'>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text className='text-[#242424] text-base'>Ödeme Başarılı !</Text>
                                <Text className='text-[#9E9E9E] text-xs'>1h</Text>
                            </View>
                            <Text className='mt-1 text-[#757575] text-xs'>We'll send you a link to join the call at the booking details, so all you need is a computer or mobile device with a camera and an internet connection.</Text>
                        </View>
                    </View>
                    <View className='mt-7 w-[95%] mx-auto' style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text className='text-[#9E9E9E] text-xs'>Yesterday</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} className='w-[95%] mx-auto mt-6'>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} className='w-12 h-12 bg-[#D2F2E166] rounded-full'>
                            <Image className='w-6' source={require('../assets/like.png')} />
                        </View>
                        <View className='w-5/6'>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text className='text-[#242424] text-base'>Senin İçin Öneriler</Text>
                                <Text className='text-[#9E9E9E] text-xs'>1h</Text>
                            </View>
                            <Text className='mt-1 text-[#757575] text-xs'>You have successfully canceled your appointment  with Dr. Randy Wigham. 50% of the funds will be returned to your account.</Text>
                        </View>
                    </View>
                    <View className='w-full bg-[#dfdfdf] pt-3 pb-8 mt-2'>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} className='w-[95%] mx-auto'>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }} className='w-12 h-12 bg-[#D2F2E166] rounded-full'>
                                <Image className='w-6' source={require('../assets/truck-tick.png')} />
                            </View>
                            <View className='w-5/6'>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text className='text-[#242424] text-base'>Ödeme Başarılı ! Kargo Teslim</Text>
                                    <Text className='text-[#9E9E9E] text-xs'>1h</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text className='mt-1 text-[#757575] text-xs'>Your payment has been successfully linked with Docdoc.</Text>
                                    <View className='w-2 h-2 rounded-full ml-4 bg-[#E02849]'>

                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} className='w-[95%] mx-auto mt-2'>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} className='w-12 h-12 bg-[#D2F2E166] rounded-full'>
                            <Image className='w-7' source={require('../assets/truck-fast.png')} />
                        </View>
                        <View className='w-5/6'>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text className='text-[#242424] text-base'>Kargo Yola Çıktı !</Text>
                                <Text className='text-[#9E9E9E] text-xs'>1h</Text>
                            </View>
                            <Text className='mt-1 text-[#757575] text-xs'>Congratulations - your appointment is confirmed! We're looking forward to meeting with you and helping you achieve your goals.</Text>
                        </View>
                    </View>

                    <View className='w-full bg-[#dfdfdf] pt-3 pb-8 mt-2'>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} className='w-[95%] mx-auto'>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }} className='w-12 h-12 bg-[#D2F2E166] rounded-full'>
                                <Image className='w-6' source={require('../assets/star-icon.png')} />
                            </View>
                            <View className='w-5/6'>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text className='text-[#242424] text-base'>Yorumunuz yayında !</Text>
                                    <Text className='text-[#9E9E9E] text-xs'>1h</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text className='mt-1 text-[#757575] text-xs'>You have successfully changed your appointment with Dr. Randy Wigham. Don’t forget to active your reminder.</Text>
                                    <View className='w-2 h-2 rounded-full ml-2 bg-[#E02849]'>

                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} className='w-[95%] mx-auto mt-2'>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} className='w-12 h-12 bg-[#D2F2E166] rounded-full'>
                            <Image className='w-7' source={require('../assets/truck-fast.png')} />
                        </View>
                        <View className='w-5/6'>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text className='text-[#242424] text-base'>Kargo Yola Çıktı !</Text>
                                <Text className='text-[#9E9E9E] text-xs'>1h</Text>
                            </View>
                            <Text className='mt-1 text-[#757575] text-xs'>Congratulations - your appointment is confirmed! We're looking forward to meeting with you and helping you achieve your goals.</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} className='w-[95%] mx-auto mt-6'>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }} className='w-12 h-12 bg-[#D2F2E166] rounded-full'>
                            <Image className='w-6' source={require('../assets/payment-icon.png')} />
                        </View>
                        <View className='w-5/6'>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text className='text-[#242424] text-base'>Ödeme Başarılı !</Text>
                                <Text className='text-[#9E9E9E] text-xs'>1h</Text>
                            </View>
                            <Text className='mt-1 text-[#757575] text-xs'>We'll send you a link to join the call at the booking details, so all you need is a computer or mobile device with a camera and an internet connection.</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>

    )
}

export default Bildirimler
