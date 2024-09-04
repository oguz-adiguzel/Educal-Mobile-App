import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Rating } from "react-native-ratings";
import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import Toast from "react-native-toast-message";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Reviews = ({id, slug }) => {
  const [title, setTitle] = useState();
  const [comment, setComment] = useState();
  const [userRating, setRaiting] = useState()
  const [token, setToken] = useState()
  const [userData, setUserData] = useState()
  const navigation = useNavigation()
  const [commentList, setCommentList] = useState()
  const [averageRaiting, setAverageRaiting] = useState();

  const handleRatingCompleted = (rating) => {
    setRaiting(rating)
  };

  const getComments = async () => {
    try {
      const response = await axios.get(
        `https://educal-api.onrender.com/courses/${slug}`
      );
      setCommentList(response.data.course.comments);
    } catch (error) {
      console.log("error", error);
    }
  };
  

  const getToken = async () => {
    try {
      const token = await SecureStore.getItemAsync("tokenKey");
      if (token) {
        setToken(token);
      } else {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error("Token alınırken hata oluştu:", error);
    }
  };

  const getUserData = async () => {
    try {
      const userData = await SecureStore.getItemAsync("userData");
      setUserData(JSON.parse(userData));
    } catch (error) {
      console.error("Token alınırken hata oluştu:", error);
    }
  };

  const createComment = async () => {
    // const token = localStorage.getItem('tokenKey')
    // const token = Cookies.get("tokenKey");

    if (token) {
      // const userData = await JSON.parse(localStorage.getItem("userData"));
      // const userData = await JSON.parse(Cookies.get("userData"));
      try {
        const response = await axios.post(
          "https://educal-api.onrender.com/courses/comment",
          {
            id: id,
            userName: userData.name,
            userPhoto: userData.photoUrl,
            title: title,
            comment: comment,
            raiting: userRating,
          }
        );
        
          Toast.show({
            type: "success", // 'success', 'error' or 'info'
            text1: "Başarılı",
            text2: response.data.message,
            visibilityTime: 6000, // Toast mesajının ekranda kalma süresi (ms)
            position: "top", // 'top' veya 'bottom'
          });
          
        setRaiting(0);
        getComments()
        // navigation.navigate("ProductDetail", { slug: slug })
        
        // getCourse();
        // raitingCount()
      } catch (error) {
        console.log("error", error);
      }
    } else {
      Toast.show({
        type: "success", // 'success', 'error' or 'info'
        text1: "Hata !",
        text2: "Lütfen giriş yapınız",
        visibilityTime: 6000, // Toast mesajının ekranda kalma süresi (ms)
        position: "top", // 'top' veya 'bottom'
      });
    }
  };

  const raitingCount = () => {
    let r = 0;
    commentList?.forEach((item) => {
      const q = item.raiting + r;
      r = q;
    });
    let average = r / commentList?.length;
    setAverageRaiting(average);
  };

  useEffect(() => {
    getToken()
    getUserData()
    getComments()
  }, [])

  useEffect(() => {
    raitingCount()
  }, [commentList])
  
  
  return (
    <View>
      <Toast />
      <Text className="mt-5 text-2xl font-medium">Yorumlar</Text>
      <Text className="mt-1 text-md text-gray-400">
        Kurs hakkında görüşlerinizi ve değerlendirmelerinizi paylaşıp, kursun
        gelişimine katkıda bulunabilirsiniz.
      </Text>
      <View className="mt-5 space-x-1" style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="w-1/3 py-10 bg-[#E5E7EB]"
        >
          <Text className="text-3xl">{averageRaiting ? averageRaiting : '5'}</Text>
          <Rating
            className="mt-1"
            type="star"
            ratingCount={5}
            defaultRating={5}
            startingValue={averageRaiting ? averageRaiting : 5}
            imageSize={20}
            // showRating
            onFinishRating={this.ratingCompleted}
            // ratingBackgroundColor="transparent"
            tintColor="#E5E7EB"
            isDisabled={true}
          />
          <Text className="text-gray-400 mt-1">{commentList?.length} Yorum</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="w-2/3 py-10 bg-[#E5E7EB]"
        >
          <Text className="text-center text-gray-700 font-medium">
            Detailed Rating
          </Text>
          <View
            className="mt-5 space-x-2"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text className="text-gray-500">5 stars</Text>
            <View className="w-24 py-0.5 bg-blue-500 rounded-full"></View>
            <Text className="text-gray-500">100</Text>
          </View>
          <View
            className="mt-2 space-x-2"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View>
              <Text className="text-gray-500">4 stars</Text>
            </View>
            <View className="w-24 py-0.5 bg-blue-500 rounded-full"></View>
            <Text className="text-gray-500">80</Text>
          </View>
          <View
            className="mt-2 space-x-2"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text className="text-gray-500">3 stars</Text>
            <View className="w-24 py-0.5 bg-blue-500 rounded-full"></View>
            <Text className="text-gray-500">50</Text>
          </View>
          <View
            className="mt-2 space-x-2"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text className="text-gray-500">2 stars</Text>
            <View className="w-24 py-0.5 bg-blue-500 rounded-full"></View>
            <Text className="text-gray-500">20</Text>
          </View>
          <View
            className="mt-2 space-x-2"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <Text className="text-gray-500">1 stars</Text>
            <View className="w-24 py-0.5 bg-blue-500 rounded-full"></View>
            <Text className="text-gray-500">0</Text>
          </View>
        </View>
      </View>
      <Text className="text-xl font-medium mt-5">{commentList?.length + 2} Yorum</Text>
      <View
        style={{ flexDirection: "row" }}
        className="w-full py-10 bg-[#E5E7EB] space-x-1 mt-5"
      >
        <View
          className="w-1/4 pr-2"
          style={{ flexDirection: "row", justifyContent: "flex-end" }}
        >
          <View className="w-14 h-14 rounded-full">
            <Image
              className="w-full h-full rounded-full"
              source={require("../../assets/teacher-1.jpg")}
            />
          </View>
        </View>
        <View className="w-3/4 px-5">
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text className="text-lg font-medium">Eleanor Fant</Text>
            <Rating
              // className="mt-1"
              type="star"
              ratingCount={5}
              defaultRating={5}
              imageSize={20}
              // showRating
              onFinishRating={this.ratingCompleted}
              // ratingBackgroundColor="transparent"
              tintColor="#E5E7EB"
              isDisabled={true}
            />
          </View>
          <Text className="text-gray-400">July 14, 2023</Text>
          <Text className="mt-4 text-gray-500">
            So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David
            blatant have it, standard A bit of how's your father my lady
            absolutely.
          </Text>
        </View>
      </View>
      <View
        style={{ flexDirection: "row" }}
        className="w-full py-10 bg-[#E5E7EB] space-x-1 mt-5"
      >
        <View
          className="w-1/4 pr-2"
          style={{ flexDirection: "row", justifyContent: "flex-end" }}
        >
          <View className="w-14 h-14 rounded-full">
            <Image
              className="w-full h-full rounded-full"
              source={require("../../assets/teacher-2.jpg")}
            />
          </View>
        </View>
        <View className="w-3/4 px-5">
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text className="text-lg font-medium">Shahnewaz Sakil</Text>
            <Rating
              // className="mt-1"
              type="star"
              ratingCount={5}
              defaultRating={5}
              imageSize={20}
              // showRating
              onFinishRating={this.ratingCompleted}
              // ratingBackgroundColor="transparent"
              tintColor="#E5E7EB"
              isDisabled={true}
            />
          </View>
          <Text className="text-gray-400">July 17, 2023</Text>
          <Text className="mt-4 text-gray-500">
            So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David
            blatant have it, standard A bit of how's your father my lady
            absolutely.
          </Text>
        </View>
      </View>

      {commentList?.map((item) => (
        <View
          style={{ flexDirection: "row" }}
          className="w-full py-10 bg-[#E5E7EB] space-x-1 mt-5"
        >
          <View
            className="w-1/4 pr-2"
            style={{ flexDirection: "row", justifyContent: "flex-end" }}
          >
            <View className="w-14 h-14 rounded-full">
              <Image
                className="w-full h-full rounded-full"
                source={{ uri: item.userPhoto }}
              />
            </View>
          </View>
          <View className="w-3/4 px-5">
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text className="text-lg font-medium">{item.userName}</Text>
              <Rating
                // className="mt-1"
                type="star"
                ratingCount={5}
                defaultRating={5}
                startingValue={item.raiting}
                imageSize={20}
                // showRating
                onFinishRating={this.ratingCompleted}
                // ratingBackgroundColor="transparent"
                tintColor="#E5E7EB"
                isDisabled={true}
                readonly={true}
              />
            </View>
            <Text className="text-gray-400">{item.date}</Text>
            <Text className="mt-4 text-gray-500 font-bold">{item.title}</Text>
            <Text className="mt-1 text-gray-500">{item.comment}</Text>
          </View>
        </View>
      ))}

      <Text className="text-xl font-medium mt-7">Bir değerlendirme yazın</Text>
      <TextInput
        className="w-full bg-gray-300 py-3 rounded-md px-3 mt-3"
        placeholder="Yorum Konusu"
        value={title}
        onChangeText={setTitle}
      />
      <View style={{ flexDirection: "row" }} className="mt-4 space-x-2">
        <Text>Raiting :</Text>
        <Rating
          // className="mt-1"
          type="star"
          ratingCount={5}
          defaultRating={0}
          imageSize={20}
          // showRating
          onFinishRating={handleRatingCompleted} 
          // ratingBackgroundColor="transparent"
          tintColor="#E5E7EB"
          isDisabled={true}
          startingValue={userRating}
        />
      </View>
      <TextInput
        className="bg-gray-300 rounded-md mt-4 p-3"
        multiline={true}
        numberOfLines={10}
        placeholder="Yorumunuzu Yazınız"
        style={{ height: 200, textAlignVertical: "top" }}
        value={comment}
        onChangeText={setComment}
      />
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="w-32 h-12 bg-blue-500 rounded-md mt-4"
        onPress={createComment}
      >
        <Text className="text-white font-medium">Gönder</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Reviews;
