import { View, Text, FlatList } from 'react-native'
import React from 'react'
import AddressCard from './Cards/AddressCard';

const Address = () => {
  const data = [{}, {}, {}, {}];

  return (
    <View className='w-[95%] mx-auto'>
        <FlatList
          data={data}
          numColumns={1}
          keyExtractor={(item) => item.id}
          renderItem={(index) => (
            <View style={{ flex: 1, margin: 6 }}>
              <AddressCard />
            </View>
          )}
        />
    </View>
  )
}

export default Address