import { View, Text } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchFilter from "../../components/SearchFilter";

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      {/* render header */}
      {/* render header */}
      <Header headerText={"Hi, Ibrahim"} headerIcon={"bell-o"} />

      <SearchFilter icon="search" placeholder={"enter your fav recipe"} />
    </SafeAreaView>
  );
};

export default RecipeListScreen;
