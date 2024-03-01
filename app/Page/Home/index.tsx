import React, { useEffect, useState } from "react";
import { Animated, StyleSheet } from "react-native";
import ListPokemon from "../../Component/Organism/ListPokemon";
import InputComponent from "../../Component/Atoms/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import HeaderMain from "../../Component/Molecules/Header";
import HeadHomePage from "../../Component/Organism/HeadHomePage";
import { useInfiniteQuery } from "react-query";
import { fetchPokemonList } from "../../api";
import Loading from "../../Component/Atoms/Loading";
import { fetchPokemonSearch } from "../../utils";
import { Pokemon } from "../../types";

interface FormValues {
  search: string;
}

const HomePage: React.FunctionComponent<{ navigation: any }> = ({
  navigation,
}) => {
  const [keywordSearch, setKeywordSearch] = useState("");
  const { control, handleSubmit } = useForm<FormValues>();
  const [loading, setLoading] = useState<Boolean>(false);
  const [searchResult, setSearchResult] = useState<Pokemon[]>([]);

  const [headerVisible, setHeaderVisible] = useState(false);
  const headerHeight = 100;
  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(
      "pokemonList",
      async ({ pageParam = 0 }) => {
        return await fetchPokemonList(pageParam * 50, 50);
      },
      {
        getNextPageParam: (lastPage, allPages) => {
          return lastPage.length === 50 ? allPages.length : false;
        },
      }
    );
  useEffect(() => {
    const fetchData = async () => {
      if (!data || !data.pages) return;
      if (!keywordSearch) return;
      try {
        const filteredResult = await fetchPokemonSearch(keywordSearch);
        setLoading(true);
        setTimeout(() => {
          setSearchResult(filteredResult)
          setLoading(false);
        }, 2000)
      } catch (error) {
        console.log(error, 'Error while fetching filtered data');
      }
    };
    fetchData();
  }, [data, keywordSearch]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setKeywordSearch(data.search);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const handleLoadMore = React.useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

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
          navigation={navigation}
          title="Pokedex"
          onPress={() => navigation.navigate("Favorite")}
        />
      </Animated.View>
      <Animated.ScrollView
        style={styles.container}
        onScroll={({ nativeEvent }) => {
          const offsetY = nativeEvent.contentOffset.y;
          if (offsetY > 300) {
            setHeaderVisible(true);
          } else {
            setHeaderVisible(false);
          }
          if (
            nativeEvent.contentOffset.y >=
            nativeEvent.contentSize.height -
              nativeEvent.layoutMeasurement.height * 2
          ) {
            handleLoadMore();
          }
        }}
        scrollEventThrottle={200}
      >
        <HeadHomePage onPress={() => navigation.navigate("Favorite")} />
        <InputComponent
          style={styles.input}
          control={control}
          name="search"
          placeholder="Search by name ..."
          onSubmitEditing={handleSubmit(onSubmit)}
        />
        {loading ? (
          <Loading />
        ) : (
          <ListPokemon
            navigation={navigation}
            isLoading={isLoading}
            dataList={
              !keywordSearch
                ? data
                  ? data.pages.flat()
                  : []
                : keywordSearch
                ? searchResult
                : []
            } // Menggunakan data?.pages untuk memastikan data tidak null
          />
        )}
      </Animated.ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ece9d7",
  },
  input: {
    margin: 20,
    padding: 10,
    backgroundColor: "#c6d598",
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
