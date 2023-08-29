import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image source={require("../../assets/images/welcome1.png")} />
    <Text>40K+ Premium </Text>
	</View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
