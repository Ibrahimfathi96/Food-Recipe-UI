import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image source={require("../../assets/images/welcome1.png")} />
      <Text style={{}}>40K+ Premium Recipes</Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
