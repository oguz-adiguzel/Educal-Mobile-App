import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./screens/Profile";
import Intro from "./screens/Intro";
import Login from "./components/Intro/Login";
import SignUp from "./components/Intro/SignUp";
import ForgetPassword from "./components/Intro/ForgetPassword";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./components/BottomTabs";
import TopTabs from "./components/TopTabs";
import Header from "./components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductDetail from "./screens/ProductDetail";
import FavoriteProducts from "./screens/FavoriteProducts";
import OnerilenUrunler from "./screens/OnerilenUrunler";
import ProfileTopTabs from "./components/ProfileTopTabs";
import Settings from "./screens/Settings";
import PersonalInformation from "./screens/PersonalInformation";
import PaymentMethod from "./screens/PaymentMethod";
import Bildirimler from "./screens/Bildirimler";
import Payment from "./screens/Payment";
import Address from "./screens/Address";
import AddCourse from "./screens/AddCourse";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
   
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => <Header />,
          }}
        >
          <Stack.Screen
            name="Intro"
            component={Intro}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="Anasayfa"
            component={BottomTabs}
          />
          {/* <Stack.Screen name="Profil" component={Profile} /> */}
          <Stack.Screen
            options={{ headerShown: true }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="SignUp"
            component={SignUp}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="ForgetPassword"
            component={ForgetPassword}
          />
          <Stack.Screen
            options={{ headerShown: true }}
            name="Shop"
            component={TopTabs}
          />
          {/* <Stack.Screen
            options={{ headerShown: true }}
            name="Profil"
            component={ProfileTopTabs}
          /> */}
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="FavoriteProduct"
            component={FavoriteProducts}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnerilenUrunler"
            component={OnerilenUrunler}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="HesapAyarları"
            component={PersonalInformation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OdemeYontemleri"
            component={PaymentMethod}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProfilBildirimler"
            component={Bildirimler}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="Payment"
            component={Payment}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="Address"
            component={Address}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddCourse"
            component={AddCourse}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}
