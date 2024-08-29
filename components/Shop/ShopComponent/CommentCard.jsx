import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { AirbnbRating } from 'react-native-ratings'

const CommentCard = () => {
    const [rating, setRating] = useState(5);
    const handleRating = (newRating) => {
        setRating(newRating);
    };
    return (
        <View className='mt-2 border-b border-gray-300'>
            <Text className='text-[#242424] text-base'>Lavin 4 Kapaklı Gardrop</Text>
            <Text className='text-xs text-[#9E9E9E] mt-1'>Renk : Beyaz</Text>
            <View className='mt-2' style={{ flexDirection: 'row' }}>
                <Image className='w-16 h-16' source={require('../../../assets/yemek-odası.jpg')} />
                <Image className='w-16 h-16 ml-5' source={require('../../../assets/yatak-odası.jpg')} />
            </View>
            <Text className='text-xs font-light text-[#242424] mt-2'>Ürün tam ve eksiksiz geldi.Teşekkürler</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems:'center' }}>
                <View className='w-1/2 h-10 pb-9 pr-20'>
                    <AirbnbRating
                        count={5}
                        defaultRating={rating}
                        size={15}
                        onFinishRating={handleRating}
                        reviewSize={0}
                        isDisabled={true}
                    />
                </View>
                <Text className='mt-1 text-[#9E9E9E] text-xs'>14 Aralık 2022</Text>
            </View>
        </View>
    )
}

export default CommentCard