import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;

  console.log(item);
  return (
    <SafeAreaView style={{ backgroundColor: item.color }}></SafeAreaView>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({});
