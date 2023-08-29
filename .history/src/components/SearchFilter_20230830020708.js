import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View
      style={st}
    >
      <FontAwesome name={icon} size={20} color="#f96163" />
      <TextInput style={{ paddingLeft: 8, fontSize: 16, color: "#808080" }}>
        {placeholder}
      </TextInput>
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({});
