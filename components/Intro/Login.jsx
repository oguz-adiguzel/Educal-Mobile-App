import { Image, StyleSheet, Text, TextInput, View, CheckBox, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import Toast from 'react-native-toast-message';

const Login = () => {
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [showPassword, setShowPassword] = useState(false)

  const handleView = () => {
    setShowPassword(!showPassword)
  }

  const login = async() =>{
    try{
      const response = await axios.post(
        "https://educal-api.onrender.com/users/login",
        {
          email: email,
          password: password,
        }
      );
      console.log('response', response.data);
      if(response){
        if(response.data.role !== 'admin'){
          await SecureStore.setItemAsync('tokenKey', response.data.token);
          await SecureStore.setItemAsync('role', response.data.role);
          await SecureStore.setItemAsync('userData', JSON.stringify(response.data.user));
          navigation.navigate('Anasayfa')
        }
      }
      
    }catch(error){
     console.log('error', error);
     Toast.show({
      type: 'error', // 'success', 'error' or 'info'
      text1: 'Hata!',
      text2: error.response.data.message,
      visibilityTime: 6000, // Toast mesajının ekranda kalma süresi (ms)
      position: 'top', // 'top' veya 'bottom'
    });
    }
  }

  return (

    <View className="container flex mx-auto w-[95%] h-screen">
       <Toast/>
      <View className='mt-4'>
        <Text className='text-blue-400 text-5xl font-light -z-10'>Hoşgeldin</Text>
        <Text className='text-[#9E9E9E] leading-6 pr-6 mt-2 -z-10'>Birbirinden popüler eğitimlerin yüzlerce farklı eğitmenin yer aldığı Educal’de aradığını bulacaksın !</Text>
      </View>
      <View className='mt-9 relative'>
        <TextInput className={email ? 'border border-blue-400 py-5 rounded-[16px] pl-3 bg-[#E0E0E0] placeholder-[#C2C2C2] text-black text-base' : 'border border-[#E0E0E0] py-5 rounded-[16px] pl-3 bg-[#E0E0E0] placeholder-[#C2C2C2] text-black text-base'}
          placeholder="E-posta"
          value={email}
          onChangeText={setEmail}

        />
        <TouchableOpacity onPress={handleView} className='absolute z-20 right-6 top-[110px]'>
          <Image className=' w-4 z-10' source={require('../../assets/eye-slash.png')} />
        </TouchableOpacity >

        <TextInput className={password ? 'border border-blue-400 py-5 rounded-[16px] mt-3 pl-3 bg-[#E0E0E0] placeholder-[#C2C2C2] text-black text-base' : 'border border-[#E0E0E0] py-5 rounded-[16px] mt-3 pl-3 bg-[#E0E0E0] placeholder-[#C2C2C2] text-black text-base'}
          placeholder="Şifre"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View className='flex-1'>
        <View className='flex-row justify-between items-center px-3 mt-2'>
          <View className='flex-row items-center'>
            <Checkbox
              className='rounded-md'
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? 'blue' : undefined}
            />
            <Text className='ml-3 text-sm text-[#9E9E9E]' >Beni Hatırla</Text>
          </View>
          <Text onPress={() => navigation.navigate('ForgetPassword')} className='text-blue-400'>Şifremi Unuttum ?</Text>
        </View>
        <TouchableOpacity onPress={login}>
        <Text className={(email && password) ? 'w-full bg-blue-400 py-5 rounded-full text-center text-white text-base mt-12' : 'w-full bg-[#E0E0E0] py-5 rounded-full text-center text-[#C2C2C2] text-base mt-12'}>Giriş Yap</Text>
        </TouchableOpacity>
        
        <View className='relative mt-12'>
          <View className='h-[1px] w-auto bg-[#D9D9D9]' ></View>
          {/* <Text className='text-center absolute -top-3 left-44'>ya da</Text> */}
          <View className='w-16 h-16 bg-[#E0E0E0] mx-auto mt-7 rounded-full'>
            <Image className='w-8 h-8 mx-auto my-auto' source={require('../../assets/google-icon.png')} />
          </View>
          <Text className='text-center text-[#9E9E9E] px-3 mt-4'>Giiriş yaparak <Text className='text-black'> Kullanıcı Sözleşmesi’ni</Text> ve <Text className='text-black'>KVKK</Text>  metnini kabul etmiş olursunuz</Text>
          <Text className='text-center mt-8 text-[#212121] font-light text-base'>Hesabınız yok mu? <Text className='text-blue-400'> Üye Ol</Text></Text>
        </View>
      </View>





    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});