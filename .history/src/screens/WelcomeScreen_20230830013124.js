import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <Image source={require('../../assets/images/w')}/>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
