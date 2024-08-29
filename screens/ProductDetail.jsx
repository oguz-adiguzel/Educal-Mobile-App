import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { AntDesign } from "@expo/vector-icons";
import Discription from "../components/CourseDetail/Discription";
import Curriculum from "../components/CourseDetail/Curriculum";
import Reviews from "../components/CourseDetail/Reviews";
import Members from "../components/CourseDetail/Members";
import * as SecureStore from "expo-secure-store";
import Toast from "react-native-toast-message";

const ProductDetail = ({ route }) => {
  const { slug } = route.params;
  const [course, setCourse] = useState();
  const [component, setComponent] = useState("disc");
  const [tokenKey, setTokenKey] = useState(null);
  const [role, setRole] = useState();
  const [studentCourses, setStudentCourses] = useState([]);
  const [find, setFind] = useState(null);
  const [userData, setUserData] = useState();

  // const token = SecureStore.getItemAsync("tokenKey");

  const navigation = useNavigation();

  // console.log("course", course);
  // console.log("StudentCourse", studentCourses);
  // console.log("find", find);

  const getToken = async () => {
    try {
      const token = await SecureStore.getItemAsync("tokenKey");
      setTokenKey(token);
    getStudentCourse();

    } catch (error) {
      console.error("Token alınırken hata oluştu:", error);
    }
  };

  const getRole = async () => {
    try {
      const role = await SecureStore.getItemAsync("role");
      setRole(role);
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

  const getCourse = async () => {
    try {
      const response = await axios.get(
        `https://educal-api.onrender.com/courses/${slug}`
      );
      setCourse(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const findCategory = () => {
    let a = course?.categories?.find(
      (cat) => cat._id === course?.course?.category
    );
    return a?.name;
  };

  const getStudentCourse = async () => {
    // const token = await localStorage.getItem("tokenKey");
    // const token = await Cookies.get("tokenKey");
    console.log('istek atıyor');
    
    try {
      const response = await axios.get(
        "https://educal-api.onrender.com/users/getTeacherCourses",
        {
          headers: {
            Authorization: tokenKey,
          },
        }
      );
      if (response) {
        setStudentCourses(response.data.courses);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const findCourse = async () => {
    const courses = await studentCourses.find(
      (item) => item === course.course?._id
    );
    console.log("find course içi", courses);

    if (courses) {
      setFind(true);
    } else {
      setFind(false);
    }
  };

  const enrollCourse = async () => {
    try {
      const response = await axios.post(
        "https://educal-api.onrender.com/courses/enroll",
        {
          userID: userData._id,
          courseID: course.course._id,
        }
      );
      if (response) {
        getStudentCourse();
        Toast.show({
          type: "success", // 'success', 'error' or 'info'
          text1: "Hata!",
          text2: response.data.message,
          visibilityTime: 6000, // Toast mesajının ekranda kalma süresi (ms)
          position: "top", // 'top' veya 'bottom'
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const releaseCourse = async () => {
    try {
      const response = await axios.post(
        "https://educal-api.onrender.com/courses/release",
        {
          userID: userData._id,
          courseID: course.course._id,
        }
      );
      if (response) {
        getStudentCourse();
        Toast.show({
          type: "success", // 'success', 'error' or 'info'
          text1: "Hata!",
          text2: response.data.message,
          visibilityTime: 6000, // Toast mesajının ekranda kalma süresi (ms)
          position: "top", // 'top' veya 'bottom'
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getCourse();
    getToken();
    getRole();
    getUserData();
    // getStudentCourse()
  }, []);

  useEffect(() => {
    // if(tokenKey){
      getCourse()
      getStudentCourse();
    // }
  }, [tokenKey]);
  
  useEffect(() => {
    // getStudentCourse()
    findCourse();
  }, [studentCourses]);

  return (
    <View
      style={{ flex: 1, alignItems: "stretch" }}
      className="w-full mx-auto mt-16 "
    >
      <Toast />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View className="h-72 w-full relative">
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="w-full h-16 px-3 absolute z-10"
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('Anasayfa')}
              style={{ justifyContent: "center", alignItems: "center" }}
              className="w-12 h-12 bg-white rounded-full"
            >
              <Image source={require("../assets/arrow-left.png")} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center" }}
              className="w-12 h-12 bg-white rounded-full"
            >
              <Image
                className="w-4 h-4"
                source={require("../assets/like-icon-null.png")}
              />
            </TouchableOpacity>
          </View>
          <View className="w-full">
            <Image
              className="h-full w-full object-contain"
              source={{ uri: course?.course.photoUrl }}
            />
          </View>
        </View>

        <Text className="mt-5 ml-3 text-gray-400">{`Home . Courses . ${course?.course.name}`}</Text>

        <View className="w-[95%] mx-auto">
          <View
            style={{ flexDirection: "row", justifyContent: "center" }}
            className="w-24 py-2 mt-5 bg-[#16A34A]"
          >
            <Text className="text-white text-xs font-bold">
              {findCategory()}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text className="text-4xl font-bold mt-1 mr-10">
              {course?.course.name}
            </Text>
          </View>
          <View
            className="mt-3"
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <View className="w-14 h-14 rounded-full border-2 border-blue-600">
              <Image
                className="w-full h-full rounded-full"
                source={{ uri: course?.user.photoUrl }}
              />
            </View>

            <View className="ml-4">
              <Text className="text-gray-400 font-bold">Eğitmen</Text>
              <Text
                onPress={() => navigation.navigate("Shop")}
                className="text-sm text-[#9B9B9B]"
              >
                {course?.user.name}
              </Text>
            </View>

            <View className="ml-7">
              <Text className="text-gray-400 font-bold">Kurs Tarihi</Text>
              <Text
                onPress={() => navigation.navigate("Shop")}
                className="text-sm text-[#9B9B9B]"
              >
                June 21, 2023
              </Text>
            </View>
          </View>
        </View>

        <View
          className="w-[95%] mx-auto mt-10"
          style={{ flexDirection: "row" }}
        >
          <TouchableOpacity
            onPress={() => setComponent("disc")}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
            }}
            className={`w-1/4 h-12 bg-gray-300 border-r border-gray-400 ${
              component === "disc" ? "bg-blue-500" : ""
            }`}
          >
            <Fontisto
              name="bookmark"
              size={16}
              color={`${component === "disc" ? "white" : "black"}`}
            />
            <Text
              className={`text-xs ml-1 ${
                component === "disc" ? "text-white" : ""
              }`}
            >
              Açıklama
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setComponent("cur")}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={`w-1/4 h-12 bg-gray-300 border-r border-gray-400 ${
              component === "cur" ? "bg-blue-500" : ""
            }`}
          >
            <Feather
              name="airplay"
              size={16}
              color={`${component === "cur" ? "white" : "black"}`}
            />
            <Text
              className={`text-xs ml-1 ${
                component === "cur" ? "text-white" : ""
              }`}
            >
              Müfredat
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setComponent("rev")}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={`w-1/4 h-12 bg-gray-300 border-r border-gray-400 ${
              component === "rev" ? "bg-blue-500" : ""
            }`}
          >
            <EvilIcons
              name="star"
              size={21}
              color={`${component === "rev" ? "white" : "black"}`}
            />
            <Text
              className={`text-xs ml-1 ${
                component === "rev" ? "text-white" : ""
              }`}
            >
              Yorumlar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setComponent("mem")}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
            }}
            className={`w-1/4 h-12 bg-gray-300 border-r border-gray-400 ${
              component === "mem" ? "bg-blue-500" : ""
            }`}
          >
            <AntDesign
              name="user"
              size={16}
              color={`${component === "mem" ? "white" : "black"}`}
            />
            <Text
              className={`text-xs ml-1 ${
                component === "mem" ? "text-white" : ""
              }`}
            >
              Üyeler
            </Text>
          </TouchableOpacity>
        </View>
        <View className="w-[95%] mx-auto">
          {component === "disc" && (
            <Discription data={course?.course.description} />
          )}
          {component === "cur" && <Curriculum data={course?.course.videoId} />}
          {component === "rev" && <Reviews id={course?.course._id} slug={course?.course.slug} />}
          {component === "mem" && <Members />}
        </View>
      </ScrollView>

      <SafeAreaView className="w-full mx-auto mt-4 pb-1">
        {tokenKey && role === "student" && !find && (
          <TouchableOpacity
            onPress={enrollCourse}
            className="w-[90%] bg-blue-500 mx-auto py-4 rounded-xl"
          >
            <Text className="text-white text-center text-base tracking-widest font-bold">
              Kursa Katıl
            </Text>
          </TouchableOpacity>
        )}
        {tokenKey && role === "student" && find && (
          <TouchableOpacity
            onPress={releaseCourse}
            className="w-[90%] bg-red-500 mx-auto py-4 rounded-xl"
          >
            <Text className="text-white text-center text-base tracking-widest font-bold">
              Kurstan Ayrıl
            </Text>
          </TouchableOpacity>
        )}
      </SafeAreaView>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
