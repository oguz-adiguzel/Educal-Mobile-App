import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";
import Sepetim from "../screens/Sepetim";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import Header from "./Header";
import ProfileTopTabs from "./ProfileTopTabs";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';


const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
  function ProfileScreen() {
    return <ProfileTopTabs />;
  }
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#FFB23F",
        inactiveTintColor: "gray",
        indicatorStyle: { backgroundColor: "#FFB23F" },
      }}
    >
      <Tab.Screen
        name="Anasayfa"
        component={Home}
        options={{
          tabBarLabel: "Home",
          unmountOnBlur: true,
          tabBarIcon: ({ color }) => (
            // <MaterialCommunityIcons name="home" size={26} />
            <AntDesign name="home" size={24} color="blue" />
          ),
        }}
      />
      <Tab.Screen
        name="Sepetim"
        component={Sepetim}
        options={{
          tabBarLabel: "Kurslar",
          tabBarIcon: ({ color }) => (
            // <MaterialCommunityIcons name="basket" size={26} />
            <Entypo name="list" size={24} color="blue" />
          ),
        }}
      />
      <Tab.Screen
        name="Bildirimler"
        component={Notification}
        options={{
          tabBarLabel: "Bildirimler",
          tabBarIcon: ({ color }) => (
            // <MaterialCommunityIcons name="android-messages" size={26} />
            <Ionicons name="notifications-outline" size={24} color="blue" />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profil",
          unmountOnBlur: true,
          tabBarIcon: ({ color }) => (
            // <MaterialCommunityIcons name="account-outline" size={26} />
            <Feather name="user" size={24} color="blue" />
          ),
        
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
