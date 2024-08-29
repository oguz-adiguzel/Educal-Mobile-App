import { View, Text, Image } from 'react-native'
import React from 'react'

const PaymentCard = ({ bgColor }) => {

    return (
        <View className='w-full py-3'>
            <View style={{ backgroundColor: bgColor, flexDirection:'column',justifyContent:'space-between' }} className='w-full h-60 rounded-xl mt-2 py-3 px-2'>
                <Image className='mt-4 ml-5 w-10 h-8' source={require('../../../assets/chip.png')} />
                <Text className='text-white text-xl ml-10 '>* * * *  * * * *  * * * *  3747</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}} className='mb-2 px-3'>
                    <View>
                        <Text className='text-[#FFFFFF] text-xs font-light'>Card Holder Name</Text>
                        <Text className='text-[#FFFFFF] text-xs'>Bagaskoro</Text>
                    </View>
                    <View>
                        <Text className='text-[#FFFFFF] text-xs font-light'>Expiry Date</Text>
                        <Text className='text-[#FFFFFF] text-xs'>05/24</Text>
                    </View>
                    <View>
                        <Image source={require('../../../assets/mastercard.png')} />
                    </View>
                </View>
            </View>
            <View className='mt-3' style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{justifyContent:'center', alignItems:'center'}} className='w-6 h-6 rounded-full bg-blue-500'>
                    <Image source={require('../../../assets/tick-icon.png')} />
                </View>
                <Text className='ml-2'>Varsayılan Olarak Kullan</Text>
            </View>
        </View>
    )
}

export default PaymentCard