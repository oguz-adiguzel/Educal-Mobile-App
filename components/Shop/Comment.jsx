import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import CommentCard from './ShopComponent/CommentCard'

const Comment = () => {
  const data = [{}, {}, {}, {}];
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} >
      <View className='w-[90%] mx-auto'>
        <FlatList
          data={data}
          numColumns={1}
          keyExtractor={(item) => item.id}
          renderItem={(index) => (
            <View style={{ flex: 1, margin: 6 }}>
              <CommentCard />
            </View>
          )}
        />
      </View>
    </ScrollView>
  )
}

export default Comment