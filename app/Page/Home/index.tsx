import React, { useState } from "react";
import { Animated, ScrollView, StyleSheet } from "react-native";
import ListPokemon from "../../Component/Organism/ListPokemon";
import InputComponent from "../../Component/Atoms/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import HeaderMain from "../../Component/Molecules/Header";

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
        <HeaderMain title="Pokedex" onPress={() => navigation.navigate("Favorite")} />
      </Animated.View>
      <Animated.ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        stickyHeaderIndices={[0]} // Ini akan membuat header tetap menempel di bagian atas layar
      >
        <InputComponent
          control={control}
          name="search"
          placeholder="Search"
          onSubmitEditing={handleSubmit(onSubmit)}
        />
        <ListPokemon search={keywordSearch} navigation={navigation} />
      </Animated.ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1, // Pastikan header berada di atas konten utama
  },
});

export default HomePage;
