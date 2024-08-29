import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-paper'
import ProductCard from '../components/Home/ProductCard'
import FavoriteCard from '../components/FavoriteProduct/FavoriteCard'

const FavoriteProducts = () => {
  const navigation = useNavigation()
  const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <View style={{ flex: 1, alignItems: 'stretch' }} className='w-[95%] mx-auto'>
      <SafeAreaView className='w-full mx-auto mt-4 pb-2'>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Anasayfa')}>
            <Image className='w-7' source={require('../assets/arrow-left.png')} />
          </TouchableOpacity>
          <View className='relative'>
            <Text className='text-lg'>Favorilerim</Text>
          </View>
          <View className='relative'>
            <Image className='w-5' source={require('../assets/favorite-page-icon.png')} />
          </View>
        </View>
        <View className='relative'>
        <Image className='w-4 right-4 top-9 absolute z-10' source={require('../assets/search-icon.png')} />
          <TextInput placeholder='Favorilerde Ara' underlineColor='transparent' className='outline-none w-full h-12 rounded-full mt-5 bg-[#e6e6e6] placeholder-[#33333399]' />
        </View>
      </SafeAreaView>

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

export default FavoriteProducts