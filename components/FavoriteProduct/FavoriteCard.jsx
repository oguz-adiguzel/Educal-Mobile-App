import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { AirbnbRating } from 'react-native-ratings';
import { useNavigation } from "@react-navigation/native";

const FavoriteCard = () => {
    const [rating, setRating] = useState(5);
    const handleRating = (newRating) => {
        setRating(newRating);
    };
    const navigation = useNavigation();

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <View className='w-full h-auto'>
            <View className='w-full h-48 relative'>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} className='w-10 h-10 rounded-full bg-white absolute z-10 border border-white -bottom-4 right-0'>
                    <View >
                        <Image className='w-4 h-4 rounded-full' source={require('../../assets/favorite-card-basket.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
                    <Image className='w-full h-full rounded-[20px]' source={require('../../assets/product-img.jpg')} />
                </TouchableOpacity>

            </View>
            <Text className='text-xs mt-1 text-[#9B9B9B] ml-1'>
                10K+ Sold
            </Text>

            <View className='mt-2 pr-2 relative' style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View className='mt-0' style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image className='w-5 h-5 rounded-full' source={require('../../assets/merchant-logo.png')} />
                    <Text onPress={() => navigation.navigate('Shop')} className='text-sm text-[#9B9B9B] ml-1'>Adıgüzel Home</Text>
                    <Image className='w-3 h-3 rounded-full ml-1' source={require('../../assets/blue-tick.png')} />
                </View>
                <TouchableOpacity style={{flexDirection:'column', alignItems:'center'}} className='w-5' onPress={()=> setToggleMenu(!toggleMenu)}>
                    <View className='w-1 h-1 bg-black rounded-full'></View>
                    <View className='w-1 h-1 bg-black rounded-full mt-1'></View>
                    <View className='w-1 h-1 bg-black rounded-full mt-1'></View>
                </TouchableOpacity>
                {
                    toggleMenu && <View className='w-[95%] h-auto bg-white absolute right-5 top-1 rounded-2xl z-10 py-3 px-4'>
                    <TouchableOpacity onPress={()=>{
                        setToggleMenu(!toggleMenu)
                        navigation.navigate('OnerilenUrunler')
                    }}>
                        <Text className='text-xs'>Önerilen ürünler</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='mt-4'>
                        <Text className='text-red-500 text-xs'>Favorilerimden Çıkar</Text>
                    </TouchableOpacity>
                </View>
                }
                
            </View>



            <View className='mt-3'>
                <Text>Lavin 4 Kapaklı Gardrop</Text>
            </View>
            <View className='mt-1'>
                <Text className='text-[#FFB23F] text-base'>15500 ₺</Text>
            </View>
        </View>
    );
};

export default FavoriteCard;

const styles = StyleSheet.create({});
