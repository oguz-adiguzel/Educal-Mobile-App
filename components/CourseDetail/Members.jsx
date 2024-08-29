import { View, Text, Image } from 'react-native'
import React from 'react'

const Members = () => {
  return (
    <View style={{flexDirection:'row', alignItems:'center'}} className='w-full mt-4 py-5 bg-[#E5E7EB]'>
      <View style={{flexDirection:'row', alignItems:'center'}} className='px-2 border-r border-gray-500 w-3/6'>
        <View className='w-16 h-16 rounded-full'>
          <Image className='w-full h-full rounded-full' source={require('../../assets/pp.jpeg')} />
        </View>
        <View className='pl-2'>
          <Text className='text-lg font-bold'>Oğuz Adıgüzel</Text>
          <Text className='text-sm text-gray-500'>Fullstack Developer</Text>
        </View>
      </View>
      <View style={{flexDirection:'column' ,justifyContent:'center', alignItems:'center'}} className='w-3/6'>
          <Text className='font-medium'>Founder Of Educal</Text>
          <View className='space-x-4 mt-2' style={{flexDirection:'row'}}>
            <View>
              <Text className='font-bold'>07</Text>
              <Text>Courses</Text>
            </View>
            <View>
              <Text className='font-bold'>12</Text>
              <Text>Reviw</Text>
            </View>
            <View>
              <Text className='font-bold'>5.00</Text>
              <Text>Raiting</Text>
            </View>
          </View>
      </View>
    </View>
  )
}

export default Members