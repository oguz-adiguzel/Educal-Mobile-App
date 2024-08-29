import { View, Text, FlatList } from 'react-native'
import React from 'react'
import SellersCard from './Cards/SellersCard';

const Sellers = () => {
  const data = [{}, {}, {}, {}];

  return (
    <View className='w-[95%] mx-auto'>
        <FlatList
          data={data}
          numColumns={1}
          keyExtractor={(item) => item.id}
          renderItem={(index) => (
            <View style={{ flex: 1, margin: 6 }}>
              <SellersCard />
            </View>
          )}
        />
    </View>
  )
}

export default Sellers