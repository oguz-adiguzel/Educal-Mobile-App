import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Landing from "../components/Intro/Landing";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Login from "../components/Intro/Login";
import SignUp from "../components/Intro/SignUp";

SplashScreen.preventAutoHideAsync();

const Intro = () => {
  const [fontsLoaded] = useFonts({
    primary: require("../assets/fonts/Quicksand-Medium.ttf"),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <View onLayout={onLayoutRootView}>
        <Landing />
        {/* <Login /> */}
        {/* <SignUp /> */}
      </View>
    </SafeAreaView>
  );
};

export default Intro;

const styles = StyleSheet.create({});
