import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/welcome1.png")} />
      <Text style={styles.text1}>40K+ Premium Recipes</Text>
      <Text style={styles.text2}>Cook Like A Chef</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("RecipeList");
        }}
        style={}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#fff",
            fontWeight: "700",
          }}
        >
          Let's Go
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  text1: { color: "#f96163", fontSize: 22, fontWeight: "bold" },
  text2: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#3c444c",
    marginTop: 44,
    marginBottom: 40,
  },
});
