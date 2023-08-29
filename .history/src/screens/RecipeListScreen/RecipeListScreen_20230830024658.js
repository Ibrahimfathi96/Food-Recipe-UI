import { View, Text } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchFilter from "../../components/SearchFilter";
import CategoriesFilter from "../../components/CategoriesFilter";
import RecipesCard from "../../components/RecipeCard";

const RecipeListScreen = () => {
  return (
		<SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
			{/* render header */}
			<Header headerText={"Hi, Ibrahim "} headerIcon={"bell-o"} />

			{/* Search Filter */}
			<SearchFilter icon="search" placeholder={"enter your fav recipe"} />

			{/* Categories filter */}

			<View style={{ marginTop: 22 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
				{/* Categories list */}
				<CategoriesFilter />
			</View>

			{/* Recipe List Filter */}

			<View style={{ marginTop: 22, flex: 1 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
				{/* Recipes list */}

				<RecipeCard />
			</View>
		</SafeAreaView>
	);    <SafeAreaView style={{ marginHorizontal: 16, flex: 1 }}>
      {/* render header */}
      <Header headerText={"Hi, Ibrahim"} headerIcon={"bell-o"} />

      {/* SEARCH FILTER */}
      <SearchFilter icon="search" placeholder={"enter your fav recipe"} />

      {/* CATEGORIES FILTER */}
      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>

        {/* CATEGORIES LIST */}
        <CategoriesFilter />
      </View>

      {/* RECIPE LIST FILTER */}
      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>

        {/* RECIPES LIST */}
        <RecipesCard />
        <View></View>
      </View>
    </SafeAreaView>
  )
};

export default RecipeListScreen;
