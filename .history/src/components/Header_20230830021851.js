import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({ headerText, headerIcon }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={styles.text1}>{headerText}</Text>

      <FontAwesome name={headerIcon} size={24} color="#f96163" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: ,
  text1: ,
});
