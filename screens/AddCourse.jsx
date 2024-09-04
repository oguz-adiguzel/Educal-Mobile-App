import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  RichEditor,
  RichToolbar,
  actions,
} from "react-native-pell-rich-editor";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const AddCourse = () => {
  const richText = useRef(); // RichEditor referansı
  const [htmlContent, setHtmlContent] = useState(""); // HTML içeriğini saklamak için state
  const [photo, setImageUri] = useState(null);
  const [categories, setCategories] = useState();
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [category, setCategory] = useState();
  const [video, setVideo] = useState();
  const [userData,setUserData] = useState()
  const [id,setId] = useState()

  const createCourse = async () => {
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("description", desc);
    // formData.append("category", category);
    // formData.append("user", id);
    // formData.append("image", photo);
    // formData.append("videoID", video);

    // console.log('formData', formData);
    

    try {
      const response = await axios.post(
        "http://localhost:3001/courses",
        {
          "name": name,
          "description":desc,
          "category": category,
          "user": id,
          "image": 'fsjdlkfjdf',
          "videoID": video
        }
      );
      // console.log('res', response);
      
    //   toast.success(response.data.message, {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 1500);
    console.log('response',response);
    
    } catch (error) {
      console.log("error", error);
    }
  };

  const getCategory = async () => {
    try {
      const response = await axios.get(
        "https://educal-api.onrender.com/categories/getCategories"
      );
      setCategories(response.data.categories);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getUserData = async () => {
    try {
      const userData = await SecureStore.getItemAsync("userData");
      setUserData(JSON.parse(userData));
    } catch (error) {
      console.error("Userdata alınırken hata oluştu:", error);
    }
  };

//   console.log("====================================");
//   console.log("category", categories);
//   console.log("====================================");

  // Metin değişikliğinde HTML içeriğini güncelleme
  const handleEditorChange = (text) => {
    setDesc(text);
  };

  const pickImage = async () => {
    // Galeriye erişim izni alınması
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Galeriye erişmek için izniniz gerekli!");
      return;
    }

    // Galeriyi açma ve resim seçme
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri); // Seçilen resmin URI'sini kaydet
    }
  };

  useEffect(() => {
    getCategory();
    getUserData()
  }, []);

  useEffect(() => {
    // getCategory();
    if (userData) setId(userData._id);
  }, [userData]);

  return (
    <View
    style={{ flex: 1, alignItems: "stretch" }}
    className="w-[95%] mx-auto"
  >
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      // contentContainerStyle={{ flexGrow: 1 }}
    >
      <View className="">
        <Text className="mt-2 font-bold text-gray-500">Kurs İsmi</Text>
        <TextInput
          className="w-full bg-gray-200 py-3 rounded-md px-3 mt-1"
          placeholder="Kurs İsmi"
          value={name}
          onChangeText={setName}
        />
        <Text className="mt-2 font-bold text-gray-500">Kurs Açıklaması</Text>

        <RichEditor
          className="mt-2"
          ref={richText}
          //   style={styles.richText}
          placeholder="Metin yazmaya başlayın..."
          onChange={handleEditorChange} // Her değişiklikte tetiklenir
        />
        <RichToolbar
          editor={richText}
          actions={[
            actions.setBold,
            actions.setItalic,
            actions.insertBulletsList,
            actions.insertOrderedList,
            actions.insertLink,
          ]}
        />
        <Text className="mt-2 font-bold text-gray-500">Youtube Video Id</Text>
        <TextInput
          className="w-full bg-gray-200 py-3 rounded-md px-3 mt-1"
          placeholder="Video Id"
          value={video}
          onChangeText={setVideo}
        />
        <Text className="mt-2 font-bold text-gray-500">Kurs Kategorisi</Text>

        <View className="border bg-gray-200 border-[#C2C2C2] py- rounded-md placeholder-gray-700 text-base mt-2">
          <Picker
            selectedValue={category}
            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
          >
            <Picker.Item
              style={{ color: "gray", fontSize: 14 }}
              label="Kategoriler"
              value=""
            />
            {categories?.map((item) => (
              // <option value={item._id}>{item.name}</option>
              <Picker.Item
                style={{ color: "black", fontSize: 14 }}
                label={item.name}
                value={item._id}
              />
            ))}
            {/* <Picker.Item style={{ color: "black", fontSize: 14 }} label="Türkiye" value="Türkiye" /> */}
          </Picker>
        </View>

        <Text className="mt-2 font-bold text-gray-500">Kurs Görseli</Text>
        <View style={styles.container} className="mt-2 mb-9">
          <Button title="Resim Seç" onPress={pickImage} />
          {/* {
            photo && <Text className="mt-2">Resim Yüklendi</Text>
            // <Image source={{ uri: imageUri }} style={styles.image} />
          } */}
          {photo && <Image source={{ uri: photo }} style={styles.image} />}
        </View>
        {/* <Button
          title="HTML İçeriği Göster"
          onPress={() => alert(htmlContent)}
        /> */}
        {/* <Text style={styles.htmlOutput}>HTML İçeriği: {htmlContent}</Text> */}
      </View>
     
    </ScrollView>
    <SafeAreaView className="w-full mx-auto mb-2">
        <TouchableOpacity
        disabled={name && desc && category && photo ? false : true}
          onPress={createCourse}
          className={`w-[90%]  ${name && desc && category && photo ? 'bg-blue-500' : 'bg-gray-200'} mx-auto py-4 rounded-full`}
        >
          <Text className="text-white text-center text-base tracking-widest font-bold">
            Kurs Ekle
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default AddCourse;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 200,
    marginTop: 20,
  },
  richText: {
    flex: 1,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  htmlOutput: {
    marginTop: 20,
    fontSize: 14,
    color: "#333",
  },
});
