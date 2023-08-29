import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Welcome.styles";
import image1 from "../../../assets/images/welcome1.png";
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Image source={require(image1)} /> */}
      <Image re/>
      <Text style={styles.text1}>40K+ Premium Recipes</Text>
      <Text style={styles.text2}>Cook Like A Chef</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("RecipeList");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
