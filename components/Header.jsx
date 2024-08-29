import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import * as SecureStore from 'expo-secure-store';

const Header = () => {
    const navigation = useNavigation()
    const [tokenKey, setTokenKey] = useState()

    const getToken = async() =>{
        try {
            const token = await SecureStore.getItemAsync('tokenKey');
            setTokenKey(token)
          } catch (error) {
            console.error('Token alınırken hata oluştu:', error);
          }
    }

    useEffect(() => {
      getToken()
    }, [])
    
    return (
        <SafeAreaView style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} className='w-[90%] mx-auto pb-2 nt-10'>
            <TouchableOpacity onPress={() => navigation.goBack()}> 
                <Image className='w-7' source={require('../assets/arrow-left.png')} />
            </TouchableOpacity>
            <View className='relative'>
                <Image className='w-auto h-auto' source={require('../assets/logo.png')} />
            </View>
            <View className='relative'>
                {/* <Image className='w-7' source={require('../assets/basket-icon.png')} /> */}
                {
                    tokenKey ? <AntDesign name="checkcircle" size={24} color="green" />: <AntDesign name="minuscircle" size={24} color="red" />
                }
                
                
            </View>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({})