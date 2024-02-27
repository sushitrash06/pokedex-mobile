import * as React from "react";
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { fetchPokemonList } from "../../../api";
import { useInfiniteQuery, useQuery } from "react-query";
import PokedexItem from "../../Molecules/PokedexItem";

interface PropsList {
  navigation: any;
  search: string;
}

const ListPokemon: React.FunctionComponent<PropsList> = ({
  navigation,
  search
}) => {
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
    if (!search) return data.pages.flatMap(page => page); // Use flatMap to flatten the array of arrays
    return data.pages.flatMap(page => page.filter((pokemon: any) => pokemon.name.includes(search.toLowerCase())));
  }, [data, search]);
  

  const handleLoadMore = React.useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) return <ActivityIndicator />;
  if (isError) return <Text>Error fetching data</Text>;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      onScroll={({ nativeEvent }) => {
        if (
          nativeEvent.contentOffset.y >=
          nativeEvent.contentSize.height -
          nativeEvent.layoutMeasurement.height * 2
        ) {
          handleLoadMore();
        }
      }}
      scrollEventThrottle={400}
    >
      {filteredData.map((pokemon: any, index:number) => (
        <View key={index} style={styles.rowContainer}>
          <PokedexItem item={pokemon} />
        </View>
      ))}
      {isFetchingNextPage && <ActivityIndicator />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  rowContainer: {
    width: '48%', // Adjust the width to fit two columns with some space between them
    marginBottom: 16, // Add some margin to create space between rows
  }
});

export default ListPokemon;
