import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ShopHomePage from "./Shop/ShopHomePage";
import ShopNewProduct from "./Shop/ShopNewProduct";
import ShopOpportunity from "./Shop/ShopOpportunity";
import Comment from "./Shop/Comment";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Image, Text, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <>
      <View
        className="w-[90%] mx-auto pt-2 pb-4"
        style={{ flexDirection: "row", alignItems: "center", justifyContent:'space-between' }}
      >
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Image
            className="w-14 h-14 rounded-full"
            source={require("../assets/merchant-logo.png")}
          />
          <View className="ml-3">
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text className="text-base ml-1">Adıgüzel Home</Text>
            <Image
              className="w-3 h-3 rounded-full ml-1"
              source={require("../assets/blue-tick.png")}
            />
          </View>
          <Text className="text-sm text-[#9E9E9E] ml-1 mt-1">
            Mobilya ve Ev Dekorasyon
          </Text>
        </View>
        </View>
        
        <View className="bg-[#FFB23F] px-4 py-3 rounded-full">
          <Text className="text-white">+ Favori</Text>
        </View>
      </View>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#FFB23F",
          inactiveTintColor: "gray",
          indicatorStyle: { backgroundColor: "#FFB23F" },
        }}
      >
        <Tab.Screen
          name="Home"
          component={ShopHomePage}
          options={{
            tabBarShowLabel: false,
            tabBarLabel: "",
            // tabBarActiveTintColor:'#FFB23F',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="home-flood"
                color={color}
                size={26}
              />
              // <Image source={require('../assets/showcase-icon.png')} />
            ),
          }}
        />
        <Tab.Screen
          name="Yeni Ürünler"
          component={ShopNewProduct}
          options={{
            tabBarLabel: "",
            // tabBarActiveTintColor:'#FFB23F',
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="cube-outline"
                color={color}
                size={26}
              />
              // <Image source={require('../assets/newproduct-icon.png')} />
              // <Feather name="box" size={24}/>
            ),
          }}
        />
        <Tab.Screen
          name="Fırsat Ürünleri"
          component={ShopOpportunity}
          options={{
            tabBarShowLabel: false,
            tabBarLabel: "",
            // tabBarActiveTintColor:'#FFB23F',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="view-grid-outline"
                color={color}
                size={26}
              />
              // <Image source={require('../assets/fırsat-icon.png')} />
            ),
          }}
        />
        <Tab.Screen
          name="Yorumlar"
          component={Comment}
          options={{
            tabBarShowLabel: false,
            // tabBarActiveTintColor:'#FFB23F',
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="comment-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default TopTabs;
