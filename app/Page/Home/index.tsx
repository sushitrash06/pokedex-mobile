import React, { useState } from "react";
import { Animated, ScrollView, StyleSheet, View } from "react-native";
import ListPokemon from "../../Component/Organism/ListPokemon";
import InputComponent from "../../Component/Atoms/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import HeaderMain from "../../Component/Molecules/Header";
import HeadHomePage from "../../Component/Organism/HeadHomePage";

interface FormValues {
  search: string;
}

const HomePage: React.FunctionComponent<{ navigation: any }> = ({
  navigation,
}) => {
  const [keywordSearch, setKeywordSearch] = useState("");
  const { control, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setKeywordSearch(data.search);
  };

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setHeaderVisible(offsetY > 0);
  };

  const [headerVisible, setHeaderVisible] = useState(false);
  const headerHeight = 100;

  return (
    <Animated.View style={{ flex: 1 }}>
      <Animated.View
        style={[
          styles.header,
          {
            transform: [{ translateY: headerVisible ? 0 : -headerHeight }],
          },
        ]}
      >
        <HeaderMain
          title="Pokedex"
          onPress={() => navigation.navigate("Favorite")}
        />
      </Animated.View>
      <Animated.ScrollView
        style={styles.container}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <HeadHomePage />
        <InputComponent
          style={styles.input}
          control={control}
          name="search by name ..."
          placeholder="Search"
          onSubmitEditing={handleSubmit(onSubmit)}
        />
        <ListPokemon search={keywordSearch} navigation={navigation} />
      </Animated.ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d5e4e9",
  },
  input: {
    margin: 20,
    padding: 10,
    backgroundColor: "#c5d2d6",
    borderRadius: 25,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1, // Pastikan header berada di atas konten utama
  },
});

export default HomePage;
