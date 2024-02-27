import React, { useState } from "react";
import { ActivityIndicator, Animated, StyleSheet, Text } from "react-native";
import ListPokemon from "../../Component/Organism/ListPokemon";
import InputComponent from "../../Component/Atoms/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import HeaderMain from "../../Component/Molecules/Header";
import HeadHomePage from "../../Component/Organism/HeadHomePage";
import { useInfiniteQuery } from "react-query";
import { fetchPokemonList } from "../../api";

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

  // const handleScroll = (event: any) => {
  //   const offsetY = event.nativeEvent.contentOffset.y;
  //   setHeaderVisible(offsetY > 0);
  // };

  const [headerVisible, setHeaderVisible] = useState(false);
  const headerHeight = 100;
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'pokemonList',
    async ({ pageParam = 0 }) => {
      return await fetchPokemonList(pageParam * 50, 50);
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length === 50 ? allPages.length : false;
      },
    }
  );
  const filteredData = React.useMemo(() => {
    if (!data || !data.pages) return []; // Ensure data and data.pages are defined
    if (!keywordSearch) return data.pages.flatMap(page => page); // Use flatMap to flatten the array of arrays
    return data.pages.flatMap(page => page.filter((pokemon: any) => pokemon.name.includes(keywordSearch.toLowerCase())));
  }, [data, keywordSearch]);
  

  const handleLoadMore = React.useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) return <ActivityIndicator />;
  if (isError) return <Text>Error fetching data</Text>;

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
        onScroll={({ nativeEvent }) => {
          if (
            nativeEvent.contentOffset.y >=
            nativeEvent.contentSize.height -
            nativeEvent.layoutMeasurement.height * 2
          ) {
            handleLoadMore();
          }
          
          const offsetY = nativeEvent.contentOffset.y;
          setHeaderVisible(offsetY > 0);
        }}
        scrollEventThrottle={400}
      >
        <HeadHomePage onPress={()=> navigation.navigate('Favorite')} />
        <InputComponent
          style={styles.input}
          control={control}
          name="search by name ..."
          placeholder="Search"
          onSubmitEditing={handleSubmit(onSubmit)}
        />
        <ListPokemon  dataList={filteredData} navigation={navigation} />
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
