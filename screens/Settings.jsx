import { View, Text, TouchableOpacity, Image, ScrollView, Switch } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Settings = () => {
    const navigation = useNavigation()
    const [notification, setNotification] = useState(false);
    const notificationSwitch = () => setNotification(previousState => !previousState);

    const [message, setMessage] = useState(false);
    const messageSwitch = () => setMessage(previousState => !previousState);

    const [shopping, setShopping] = useState(false);
    const shoppingSwitch = () => setShopping(previousState => !previousState);

    return (
        <View style={{ flex: 1, alignItems: 'stretch' }} className='w-[95%] mx-auto mt-3'>
            <SafeAreaView className='relative'>
                <Text className='text-center text-lg'>Ayarlar</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image className='absolute bottom-0' source={require('../assets/arrow-left.png')} />
                </TouchableOpacity>
            </SafeAreaView>

            <ScrollView>
                <Text className='text-[#9E9E9E] mt-2 text-sm'>Bildirimler</Text>
                <View className='w-full pb-3 bg-[#dddddd] rounded-xl px-5 mt-2'>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text className='text-base'>Tüm Bildirimleri Göster</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: 'blue' }}
                            thumbColor={notification ? 'white' : 'white'}
                            onValueChange={notificationSwitch}
                            value={notification}
                            style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
                        />
                    </View>
                    <Text className='text-[#242424] font-light text-sm'>Uygulamanın kilit ekranınızda size anlık bildirimler göndermesine izin verin</Text>
                </View>
                <View className='w-full pb-3 bg-[#dddddd] rounded-xl px-5 mt-2'>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text className='text-base'>Mesaj Bildirimlerini Göster</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: 'blue' }}
                            thumbColor={message ? 'white' : 'white'}
                            onValueChange={messageSwitch}
                            value={message}
                            style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
                        />
                    </View>
                    <Text className='text-[#242424] font-light text-sm'>Uygulamanın kilit ekranınızda size anlık mesaj bildirimlerini göndermesine izin verin</Text>
                </View>
                <View className='w-full pb-3 bg-[#dddddd] rounded-xl px-5 mt-2'>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text className='text-base'>Kurs Bildirimlerini Göster</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: 'blue' }}
                            thumbColor={shopping ? 'white' : 'white'}
                            onValueChange={shoppingSwitch}
                            value={shopping}
                            style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
                        />
                    </View>
                    <Text className='text-[#242424] font-light text-sm'>Uygulamanın kilit ekranınızda size anlık kurs bildirimlerini göndermesine izin verin</Text>
                </View>
                <Text className='text-[#9E9E9E] mt-2 text-sm'>Hesap</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('HesapAyarları')} style={{ flexDirection: 'row', justifyContent: 'space-between' }} className='w-full py-3 pb-3 bg-[#dddddd] rounded-xl px-5 mt-2'>
                    <View>
                        <Text className='text-base'>Kişisel Bilgiler</Text>
                        <Text className='text-[#242424] font-light text-sm mt-2'>Hesap bilgilerini güncellemek için tıklayınız</Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../assets/right-icon.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('OdemeYontemleri')} style={{ flexDirection: 'row', justifyContent: 'space-between' }} className='w-full py-3 pb-3 bg-[#dddddd] rounded-xl px-5 mt-2'>
                    <View>
                        <Text className='text-base'>Ödeme Yöntemi</Text>
                        <Text className='text-[#242424] font-light text-sm mt-2'>Kredi kartı ekleme ve silme işlemleri</Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../assets/right-icon.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }} className='w-full py-3 pb-3 bg-[#dddddd] rounded-xl px-5 mt-2'>
                    <View>
                        <Text className='text-base'>Müşteri Desteği</Text>
                        <Text className='text-[#242424] font-light text-sm mt-2'>Online canlı destek hattı</Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../assets/right-icon.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }} className='w-full py-3 pb-3 bg-[#dddddd] rounded-xl px-5 mt-2'>
                    <View>
                        <Text className='text-base'>Gizlilik ve Güvenlik</Text>
                        <Text className='text-[#242424] font-light text-sm mt-2'>Uygulama gizlilik ve güvenlik ayarları</Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../assets/right-icon.png')} />
                    </View>
                </TouchableOpacity>
                
            </ScrollView>
        </View>
    )
}

export default Settings