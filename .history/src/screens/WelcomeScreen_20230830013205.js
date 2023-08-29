import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{flex:1, alignItems}}>
      <Image source={require("../../assets/images/welcome1.png")} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
