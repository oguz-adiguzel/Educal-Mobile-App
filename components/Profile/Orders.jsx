import { View, Text, FlatList } from 'react-native'
import React from 'react'
import OrderCard from './Cards/OrderCard'

const Orders = () => {
  const data = [{}, {}, {}, {}];

  return (
    <View className='w-[95%] mx-auto'>
        <FlatList
          data={data}
          numColumns={1}
          keyExtractor={(item) => item.id}
          renderItem={(index) => (
            <View style={{ flex: 1, margin: 6 }}>
              <OrderCard />
            </View>
          )}
        />
    </View>
  )
}

export default Orders