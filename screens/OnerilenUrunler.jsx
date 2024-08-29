import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FavoriteCard from '../components/FavoriteProduct/FavoriteCard';
import { AirbnbRating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';

const OnerilenUrunler = () => {
    const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    const [rating, setRating] = useState(5);
    const handleRating = (newRating) => {
        setRating(newRating);
    };
    const navigation = useNavigation();


    return (
        <View style={{ flex: 1, alignItems: 'stretch' }} className='w-[90%] mx-auto'>
            <View className='mt-5'>
                <SafeAreaView className='relative'>
                    <Text className='text-center text-lg'>Önerilen Ürünler</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('FavoriteProduct')}>
                        <Image className='absolute bottom-0' source={require('../assets/arrow-left.png')} />
                    </TouchableOpacity>
                </SafeAreaView>
            </View>

            <View style={{ flexDirection: 'row' }} className='w-full h-auto mt-4 bg-white rounded-xl py-5 px-2 shadow-lg'>
                <View className='w-28 h-28'>
                    <Image className='w-full h-full rounded-lg' source={require('../assets/product-img.jpg')} />
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-around' }} className='pl-4'>
                    <Text className='text-base'>Lavin 4 Kapaklı Gardrop</Text>
                    <View className='mt-3' style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image className='w-5 h-5 rounded-full' source={require('../assets/merchant-logo.png')} />
                        <Text onPress={() => navigation.navigate('Shop')} className='text-sm text-[#9B9B9B] ml-1'>Adıgüzel Home</Text>
                        <Image className='w-3 h-3 rounded-full ml-1' source={require('../assets/blue-tick.png')} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }} className=''>
                        <Text className='text-base text-[#FFB23F]'>15500 ₺</Text>
                        <View className='w-full h-10 pb-7 pr-48'>
                            <AirbnbRating
                                count={5}
                                defaultRating={rating}
                                size={15}
                                onFinishRating={handleRating}
                                reviewSize={0}
                                isDisabled={true}
                            />
                        </View>
                    </View>
                </View>
            </View>



            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >

                <View className='mt-5'>
                    <FlatList
                        data={data}
                        numColumns={2} // İki sütunlu bir grid yapısı oluşturmak için
                        keyExtractor={(item) => item.id}
                        renderItem={(index) => (
                            <View style={{ flex: 1, margin: 6 }}>
                                <FavoriteCard />
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default OnerilenUrunler