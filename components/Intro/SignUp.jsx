import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
// import {launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

const SignUp = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [email, setEmail] = useState();
  const [name, setNameSurname] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [photo, setImageUri] = useState(null);
  const [role, setRole] = useState("student");

  // console.log('role', role);

  const handleView = () => {
    setShowPassword(!showPassword);
  };
  const signUpFunc = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", photo);
    formData.append("role", role);

    console.log("data", formData);

    try {
      const response = await axios.post(
        "https://educal-api.onrender.com/users/signup"
      );

      console.log("res", response);

      if (response) {
        console.log("başarılı");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      // Seçilen resim URI'sini işleyin
    }
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
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0]); // Seçilen resmin URI'sini kaydet
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View className="container flex mx-auto w-[95%] h-screen">
        <View className="mt-4">
          <Text className="text-blue-400 text-5xl font-light">Hoşgeldin</Text>
          <Text className="text-[#9E9E9E] leading-6 pr-6 mt-2">
            Birbirinden popüler eğitimlerin yüzlerce farklı eğitmenin yer aldığı
            Educal’de aradığını bulacaksın !
          </Text>
        </View>
        <View className="mt-9 relative">
          <TextInput
            className={
              name
                ? "border-2 border-blue-400 py-5 rounded-[16px] pl-3 bg-[#E0E0E0] placeholder-[#C2C2C2] text-black text-base"
                : "border-2 border-[#E0E0E0] py-5 rounded-[16px] pl-3 bg-[#E0E0E0] placeholder-[#C2C2C2] text-black text-base"
            }
            placeholder="İsim Soyisim"
            value={name}
            onChangeText={setNameSurname}
          />
          <TextInput
            className={
              email
                ? "border-2 border-blue-400 py-5 rounded-[16px] mt-3 pl-3 bg-[#E0E0E0] placeholder-[#C2C2C2] text-black text-base"
                : "border-2 border-[#E0E0E0] py-5 rounded-[16px] mt-3 pl-3 bg-[#E0E0E0] placeholder-[#C2C2C2] text-black text-base"
            }
            placeholder="E-posta"
            value={email}
            onChangeText={setEmail}
          />
          <TouchableOpacity
            onPress={handleView}
            className="absolute z-20 right-6 top-[110px]"
          >
            <Image
              className=" w-4 z-10"
              source={require("../../assets/eye-slash.png")}
            />
          </TouchableOpacity>
          <TextInput
            className={
              password
                ? "border-2 border-blue-400 py-5 mt-3 rounded-[16px] pl-3 bg-[#E0E0E0] placeholder-[#C2C2C2] text-black text-base"
                : "border-2 border-[#E0E0E0] py-5 mt-3 rounded-[16px] pl-3 bg-[#E0E0E0] placeholder-[#C2C2C2] text-black text-base"
            }
            placeholder="Şifre"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <View
            style={{
              backgroundColor: "#E0E0E0",
              borderRadius: 20,
              height: 80,
              marginTop: 15,
            }}
          >
            <Picker
              selectedValue={role}
              style={{
                height: 80,
              }}
              onValueChange={(itemValue, itemIndex) => setRole(itemValue)}
            >
              <Picker.Item color="grey" label="Öğrenci" value="student" />
              <Picker.Item color="grey" label="Eğitmen" value="teacher" />
            </Picker>
          </View>
        </View>

        <View style={styles.container}>
          <Button title="Resim Seç" onPress={pickImage} />
          {
            photo && <Text className="mt-2">Resim Yüklendi</Text>
            // <Image source={{ uri: imageUri }} style={styles.image} />
          }
        </View>

        <TouchableOpacity
          onPress={() => {
            signUpFunc();
          }}
        >
          <Text
            className={
              email && password && name
                ? "w-full bg-blue-600 py-5 rounded-full text-center text-white text-base mt-12"
                : "w-full bg-[#E0E0E0] py-5 rounded-full text-center text-[#C2C2C2] text-base mt-12"
            }
          >
            Hesap Oluştur
          </Text>
        </TouchableOpacity>

        <View className="flex-1">
          <View className="relative mt-12">
            <View className="h-[1px] w-auto bg-[#D9D9D9]"></View>
            {/* <Text className="text-center absolute -top-3 left-44">ya da</Text> */}
            <View className="w-16 h-16 bg-[#E0E0E0] mx-auto mt-3 rounded-full">
              <Image
                className="w-8 h-8 mx-auto my-auto"
                source={require("../../assets/google-icon.png")}
              />
            </View>
            <Text className="text-center text-[#9E9E9E] px-3 mt-4">
              Giriş yaparak{" "}
              <Text
                onPress={() => setModalVisible(true)}
                className="text-black"
              >
                {" "}
                Kullanıcı Sözleşmesi’ni
              </Text>{" "}
              ve{" "}
              <Text
                onPress={() => setModalVisible2(true)}
                className="text-black"
              >
                KVKK
              </Text>{" "}
              metnini kabul etmiş olursunuz
            </Text>
            <View style={styles.bottomTexts} className="mt-5">
              <Text className="text-center  text-[#212121] font-light text-base flex-row">
                Hesabınız var mı?
              </Text>
              <Text
                onPress={() => {
                  navigation.navigate("Login");
                }}
                className="text-blue-400 ml-2"
              >
                Giriş Yap
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ flexGrow: 1 }}
                >
                  <Text className="text-xl" style={styles.modalText}>
                    Kullanıcı Sözleşmesi
                  </Text>
                  <Text className="font-bold">1. Taraflar ve Kapsam</Text>
                  <Text>
                    Bu Kullanıcı Sözleşmesi ("Sözleşme"), Educal platformuna üye
                    olan tüm kullanıcılar ("Kullanıcı") ile Educal Eğitim
                    Teknolojileri Ltd. Şti. ("Şirket") arasında yapılmıştır.
                    Sözleşme, platforma üye olunmasıyla birlikte yürürlüğe
                    girmiş olup, platformun kullanımını ve tarafların hak ve
                    yükümlülüklerini düzenler.
                  </Text>
                  <Text className="font-bold mt-2">2. Hizmetler</Text>
                  <Text>
                    Platform, eğitmenlerin eğitim içeriklerini yayınlamalarına
                    ve kullanıcıların bu içeriklere erişim sağlamalarına olanak
                    tanır. Kullanıcılar, platform üzerinden sunulan hizmetlerden
                    faydalanarak, eğitmenlerin sunduğu eğitimleri izleyebilir ve
                    katılabilir.
                  </Text>
                  <Text className="font-bold mt-2">
                    3. Üyelik ve Hesap Güvenliği
                  </Text>
                  <Text>
                    Kullanıcı, üyelik formunu eksiksiz ve doğru bir şekilde
                    doldurmalıdır. Üyelik bilgileri ve şifrenin gizliliği ve
                    güvenliğinden kullanıcı sorumludur. Hesap bilgilerinin
                    izinsiz kullanımı durumunda kullanıcı, derhal Şirket’e
                    bildirimde bulunmalıdır.
                  </Text>
                  <Text className="font-bold mt-2">
                    4. Kullanıcı Yükümlülükleri
                  </Text>
                  <Text>
                    Kullanıcı, platformu hukuka uygun bir şekilde kullanmakla
                    yükümlüdür. Platform üzerinden yapılan her türlü işlem ve
                    eylemden kullanıcı sorumludur. Kullanıcı, platformun
                    işleyişini aksatacak ya da zarar verecek herhangi bir
                    faaliyette bulunmamalıdır.
                  </Text>
                  <Text className="font-bold mt-2">
                    5. Fikri Mülkiyet Hakları
                  </Text>
                  <Text>
                    Platformda yer alan tüm içerikler, yazılımlar, tasarımlar,
                    ticari markalar, ve diğer tüm materyaller Şirket'e aittir.
                    Kullanıcı, bu materyalleri Şirket'in izni olmaksızın
                    kopyalayamaz, dağıtamaz veya ticari amaçla kullanamaz.
                  </Text>
                  <Text className="font-bold mt-2">6. Sözleşmenin Feshi</Text>
                  <Text>
                    Şirket, kullanıcıların bu Sözleşme'ye aykırı davranması
                    durumunda kullanıcı hesabını askıya alabilir veya
                    feshedebilir. Kullanıcı da istediği zaman üyeliğini iptal
                    edebilir.
                  </Text>
                  <Text className="font-bold mt-2">
                    7. Sorumluluğun Sınırlandırılması
                  </Text>
                  <Text>
                    Platformun kullanımından doğacak doğrudan veya dolaylı
                    zararlardan Şirket sorumlu tutulamaz. Platformdaki
                    eğitimlerin içeriğinden eğitmenler sorumludur.
                  </Text>
                  <Text className="font-bold mt-2">
                    8. Uyuşmazlıkların Çözümü
                  </Text>
                  <Text>
                    Bu Sözleşme Türkiye Cumhuriyeti yasalarına tabidir. Sözleşme
                    ile ilgili doğabilecek her türlü uyuşmazlıkların çözümünde
                    İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.
                  </Text>
                  <Text className="font-bold mt-2">9. Değişiklikler</Text>
                  <Text>
                    Şirket, bu Sözleşme’de değişiklik yapma hakkını saklı tutar.
                    Yapılan değişiklikler platformda yayınlanır ve
                    kullanıcıların onayına sunulur.
                  </Text>

                  <Pressable
                    className="my-5"
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Okudum, Kabul Ediyorum</Text>
                  </Pressable>
                </ScrollView>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible2(!modalVisible2);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ flexGrow: 1 }}
                >
                  <Text className="text-xl" style={styles.modalText}>
                    KVKK Aydınlatma Metni
                  </Text>
                  <Text className="font-bold">1. Veri Sorumlusu</Text>
                  <Text>
                    <Text>
                      Educal Eğitim Teknolojileri Ltd. Şti. olarak, 6698 sayılı
                      Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında,
                      kişisel verilerinizi işleme ve koruma konusunda azami
                      özeni göstermekteyiz.
                    </Text>
                  </Text>
                  <Text className="font-bold mt-2">
                    2. İşlenen Kişisel Veriler
                  </Text>
                  <Text>
                    Kayıt esnasında ve platformu kullanırken bize sağladığınız
                    ad, soyad, e-posta adresi, telefon numarası, IP adresi gibi
                    kişisel verileriniz işlenmektedir.
                  </Text>
                  <Text className="font-bold mt-2">
                    3. Kişisel Verilerin İşlenme Amaçları
                  </Text>
                  <Text>
                    Kişisel verileriniz, üyelik işlemlerinin gerçekleştirilmesi,
                    platform hizmetlerinin sunulması, kullanıcı deneyiminin
                    iyileştirilmesi, hukuki yükümlülüklerin yerine getirilmesi
                    ve meşru menfaatlerimiz doğrultusunda işlenmektedir.
                  </Text>
                  <Text className="font-bold mt-2">
                    4. Kişisel Verilerin Aktarımı
                  </Text>
                  <Text>
                    Kişisel verileriniz, yasal zorunluluklar ve işbirliği
                    yaptığımız hizmet sağlayıcıları ile paylaşılabilir. Ayrıca,
                    platformumuzun yurt dışındaki sunucularda barındırılması
                    durumunda verileriniz yurt dışına aktarılabilir.
                  </Text>
                  <Text className="font-bold mt-2">
                    5. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
                  </Text>
                  <Text>
                    Kişisel verileriniz, platform üzerinden elektronik ortamda
                    toplanmaktadır. Verileriniz, KVKK’nın 5. ve 6. maddelerinde
                    belirtilen hukuki sebepler çerçevesinde işlenmektedir.
                  </Text>
                  <Text className="font-bold mt-2">6. Veri Sahibi Hakları</Text>
                  <Text>
                    KVKK kapsamında, kişisel verilerinizle ilgili olarak bilgi
                    talep etme, düzeltilmesini veya silinmesini isteme,
                    verilerinizin işlenmesine itiraz etme gibi haklarınız
                    bulunmaktadır. Bu haklarınızı kullanmak için bizimle
                    iletişime geçebilirsiniz.
                  </Text>
                  <Text className="font-bold mt-2">7. İletişim Bilgileri</Text>
                  <Text>
                    Herhangi bir sorunuz veya talebiniz olması durumunda Educal
                    Eğitim Teknolojileri Ltd. Şti.'ne şu iletişim kanallarından
                    ulaşabilirsiniz: oguz_adiguzel@outlook.com, 0552 428 9743,
                    Eskişehir/Tepebaşı.
                  </Text>

                  <Pressable
                  className='my-5'
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible2(!modalVisible2)}
                  >
                    <Text style={styles.textStyle}>Okudum, Kabul Ediyorum</Text>
                  </Pressable>
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  bottomTexts: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: 400,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#FFB23F",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
