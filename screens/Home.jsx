import { StyleSheet, View, Text, ScrollView } from "react-native";
import React from "react";
import Categories from "../components/Home/Categories";
import ShowCase from "../components/Home/ShowCase";
import Discount from "../components/Home/Discount";
import DiscountCard from "../components/Home/DiscountCard";
import Opportunity from "../components/Home/Opportunity";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Campaigns from "../components/Home/Campaigns";
import Footer from "../components/Footer";
import Advert from "../components/Home/Advert";


const Home = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <View style={{ flex: 1, alignItems: 'stretch' }}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} >
        <View style={{ flex: 1, alignItems: 'stretch' }}>
          <Campaigns />
          <Categories />
          <DiscountCard />
          <ShowCase />
          <Opportunity />
          <Advert />
          {/* <Discount /> */}
          <Footer />
        </View>
      </ScrollView>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
