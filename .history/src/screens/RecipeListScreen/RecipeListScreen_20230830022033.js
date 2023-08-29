import { View, Text } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchFilter from "../../components/SearchFilter";
import CategoriesFilter from"";
const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      {/* render header */}
      <Header headerText={"Hi, Ibrahim"} headerIcon={"bell-o"} />

      {/* SEARCH FILTER */}
      <SearchFilter icon="search" placeholder={"enter your fav recipe"} />

      {/* CATEGORIES FILTER */}
      <View>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>

        {/* CATEGORIES LIST */}
        <CategoriesFilter />
      </View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;
