import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/welcome1.png")} />
      <Text style={styles.text1}>40K+ Premium Recipes</Text>
      <Text
        style={styles.}
      >
        Cook Like A Chef
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("RecipeList");
        }}
        style={{
          backgroundColor: "#f96163",
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
        }}
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
});
