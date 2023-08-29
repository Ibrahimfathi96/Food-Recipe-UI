import { View, Text } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const RecipeListScreen = () => {
  return (
    <SafeAreaView st>
      <View>
        <Header headerText={"Hi, Ibrahim"} />
      </View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;
