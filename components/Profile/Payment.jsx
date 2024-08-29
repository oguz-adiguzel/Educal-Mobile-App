import { ScrollView, View } from 'react-native'
import React from 'react'
import PaymentCard from './Cards/PaymentCard';

const Payment = () => {
  const data = [{}, {}, {}, {}];

  return (
    <View className='w-[95%] mx-auto'>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <PaymentCard bgColor={'#242424'} />
        <PaymentCard bgColor={'#9C3DA5'} />
      </ScrollView>

    </View>
  )
}

export default Payment