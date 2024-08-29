import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import ProductCard from "./Home/ProductCard";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createMaterialTopTabNavigator();

function ProfileTopTabs() {
  const [token, setToken] = useState();
  const [userData, setUserData] = useState();
  const [userCourses, setUserCourses] = useState();
  const [studentCourseId, setstudentCourseId] = useState();
  const [studentCourse, setStudentCourse] = useState([]);
  const [role, setRole] = useState();
  const [categories, setCateries] = useState();
  const [age, setAge] = useState();
  const [date, setDate] = useState();

  const navigation = useNavigation();


  // console.log("date", date);

  // console.log('nav', navigation);
  console.log("slug", navigation);

  

  // console.log('token', token);

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

  const getRole = async () => {
    try {
      const role = await SecureStore.getItemAsync("role");
      setRole(role);
    } catch (error) {}
  };

  const getCategory = async () => {
    try {
      const response = await axios.get(
        "https://educal-api.onrender.com/categories/getCategories"
      );
      setCateries(response.data.categories);
    } catch (error) {
      console.log("error", error);
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
        setUserCourses(response.data.courses);
      }
      if (response.data.user.role === "student") {
        setstudentCourseId(response.data.user.courses);
      }
    } catch (error) {
      console.log("error", error);
      logOut()
      // navigation.navigate('Login')
    }
  };

  const getEnrollCourses = async () => {
    try {
      if (role === "student") {
        for (let index = 0; index < studentCourseId.length; index++) {
          const id = studentCourseId[index];
          const response = await axios.post(
            "https://educal-api.onrender.com/users/getStudentCourses",
            {
              id: id,
            }
          );
          const c = response.data.course;
          setStudentCourse((prev) => [...prev, c]);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const repeatObject = () => {
    // Tekrarlanan id'leri bulmak için bir yardımcı nesne oluşturun
    let idler = {};

    // Tekrarlanan id'leri bulun ve filtreleyin
    let sonuc = studentCourse.filter(function (obje) {
      // Eğer id daha önce görülmemişse, id'yi kaydedin ve bu nesneyi sonuca dahil edin
      if (!idler[obje?._id]) {
        idler[obje?._id] = true;
        return true;
      }
      // Eğer id daha önce görülmüşse, bu nesneyi sonuca dahil etmeyin
      return false;
    });
    return sonuc;
  };

  const logOut = async () => {
    try {
      const keys = ["tokenKey", "role", "userData"];

      for (const key of keys) {
        await SecureStore.deleteItemAsync(key);
      }

      console.log("Tüm veriler başarıyla temizlendi.");
      navigation.navigate("Intro");
    } catch (error) {
      console.error("Veriler temizlenirken hata oluştu:", error);
    }
  };

  const calculateAge = () => {
    const today = new Date();
    const birthdateDate = new Date(userData?.age);

    console.log('birthdate', birthdateDate);
    

    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthdateDate.getDate())
    ) {
      age--;
    }

    setAge(age);
  };

  useEffect(() => {
    getToken();
    getRole();
    getCategory();
  }, []);

  useEffect(() => {
    if (token) getUserData();
  }, [token]);

  useEffect(() => {
    if (studentCourseId) getEnrollCourses();
  }, [studentCourseId]);

  useEffect(() => {
    setDate(userData?.age);
  }, [userData]);

  useEffect(() => {
    if (date) calculateAge();
  }, [date]);

  return (
    <>
      <View className="w-[90%] mx-auto pt-2 pb-4">
        <View
          className="mt-2"
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={logOut} className="relative">
            <AntDesign name="logout" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Settings")}
            className="ml-4"
          >
            <Ionicons name="settings-outline" size={26} color="black" />
          </TouchableOpacity>
        </View>

        <View className="mx-auto w-36 h-36 rounded-full shadow-md mt-3">
          <Image
            className="w-full h-full rounded-full"
            source={{ uri: userData?.photoUrl }}
          />
        </View>
        <Text className="text-center text-xl font-light mt-4">
          {userData?.name}
        </Text>
        <Text className="text-center text-sm text-[#242424] font-light">
          {userData?.email}
        </Text>
        <Text className="text-center text-sm text-[#242424] font-light mt-2">
          {age ? age : "Güncelleyiniz"} -{" "}
          {userData?.location ? userData?.location : "Güncelleyiniz"}
        </Text>
        <Text className="text-center text-sm text-[#242424]">{userData?.role}</Text>
        {userData?.role === "teacher" ? (
              <Text className="text-center text-sm text-[#242424] font-light">
                {userData?.courses.length} kurs
              </Text>
            ) : (
              <Text className="text-center text-sm text-[#242424] font-light mt-2">
                {userData?.courses.length} katılım
              </Text>
            )}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {
          role === "student" &&
            repeatObject().map((item, index) => (
              <View key={index} style={{ flex: 1, margin: 6 }}>
                <ProductCard item={item} categories={categories} />
                {/* <Text>Card</Text> */}
              </View>
            ))
          // <FlatList
          //   data={repeatObject()}
          //   //   horizontal
          //   renderItem={({ item, index }) => (
          //     <View key={index} style={{ flex: 1, margin: 6 }}>
          //       <ProductCard item={item} categories={categories} />
          //       {/* <Text>Card</Text> */}
          //     </View>
          //   )}
          // />
        }

        {userCourses?.map((item, index) => (
          <View key={index} style={{ flex: 1, margin: 6 }}>
            <ProductCard
              item={item}
              categories={categories}
              teacher={userData?.name}
              teacherPhoto={userData.photoUrl}
            />
            {/* <Text>Card</Text> */}
          </View>
        ))}
      </ScrollView>
    </>
  );
}

export default ProfileTopTabs;
