import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image source={require("../../assets/images/welcome1.png")} />
      <Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
        40K+ Premium Recipes
      </Text>
      <Text style={{ fontSize: 42, fontWeight: "bold", color: "#3c444c" marginTop:44 }}>
        Cook Like A Chef
      </Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});