import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
  //   Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import Toast from "react-native-toast-message";
import DateTimePicker from "@react-native-community/datetimepicker";

const PersonalInformation = () => {
  const navigation = useNavigation();

  const [token, setToken] = useState();
  const [userData, setUserData] = useState();
  const [userName, setUserName] = useState();
  const [location, setLocation] = useState();

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [formattedDate, setFormattedDate] = useState(date.toLocaleDateString());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios"); // iOS için sürekli açık kalabilir
    setDate(currentDate);

    const formatted = currentDate.toLocaleDateString();
    setFormattedDate(formatted);
  };

  const showMode = () => {
    setShow(true);
  };

  const getToken = async () => {
    try {
      const token = await SecureStore.getItemAsync("tokenKey");
      // console.log('getToken', token);

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
    // const token = await localStorage.getItem("tokenKey");
    try {
      const response = await axios.get(
        "https://educal-api.onrender.com/users/profile",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response) {
        setUserData(response.data.user);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const updateUser = async () => {
    try {
      const response = await axios.put(
        "https://educal-api.onrender.com/users/update",
        {
          id: userData._id,
          name: userName,
          age: date,
          location: location,
        }
      );

      Toast.show({
        type: "success", // 'success', 'error' or 'info'
        text1: "Başarılı",
        text2: response.data.message,
        visibilityTime: 6000, // Toast mesajının ekranda kalma süresi (ms)
        position: "top", // 'top' veya 'bottom'
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    getUserData();
  }, [token]);

  useEffect(() => {
    setUserName(userData?.name);
    // setDate(userData?.age)
    setLocation(userData?.location);
  }, [userData]);

  return (
    <View
      style={{ flex: 1, alignItems: "stretch" }}
      className="w-[95%] mx-auto"
    >
      <Toast />
      <SafeAreaView className="relative -z-20">
        <Text className="text-center text-lg">Kişisel Bilgiler</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Profil")}>
          <Image
            className="absolute bottom-0"
            source={require("../assets/arrow-left.png")}
          />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View className="w-full mx-auto">
          <View className="mx-auto w-28 h-28 rounded-full shadow-md mt-8">
            <Image
              className="w-full h-full rounded-full"
              source={{ uri: userData?.photoUrl }}
            />
          </View>
          <Text className="text-center text-xl font-light mt-5">
            Profili Düzenle
          </Text>

          <TextInput
            className="border border-[#C2C2C2] py-5 rounded-2xl pl-3 placeholder-[#C2C2C2] text-black text-base mt-10"
            placeholder="İsim"
            value={userName}
            onChangeText={setUserName}
          />

          <View className="border border-[#C2C2C2] py-2 rounded-2xl placeholder-[#C2C2C2] text-base mt-8">
            <Picker
              selectedValue={location}
              onValueChange={(itemValue, itemIndex) => setLocation(itemValue)}
            >
              <Picker.Item
                style={{ color: "#C2C2C2", fontSize: 17 }}
                label="Lokasyon"
                value=""
              />
              <Picker.Item label="Türkiye" value="Türkiye" />
            </Picker>
          </View>

          <View
            className="mt-8"
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text className="text-lg text-gray-500">
              Seçilen Tarih: {formattedDate}
            </Text>
            <Button className="mt-2" onPress={showMode} title="Tarih Seç" />
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>

          <Text className="text-sm text-[#9E9E9E] mt-3">
            Lorem ipsum dolor sit amet consectetur. Sapien ac sollicitudin
            egestas id eget pellentesque.Lorem ipsum dolor sit amet consectetur.
            Sapien ac sollicitudin egestas id eget pellentesque.
          </Text>
        </View>
      </ScrollView>

      <SafeAreaView className="w-full mx-auto mb-2">
        <TouchableOpacity
          onPress={updateUser}
          className="w-[90%] bg-blue-500 mx-auto py-4 rounded-full"
        >
          <Text className="text-white text-center text-base tracking-widest font-bold">
            Kaydet
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
