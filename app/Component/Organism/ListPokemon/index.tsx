import * as React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import PokedexItem from "../../Molecules/ItemsList";
import { fetchPokemonList } from "../../../api";
import { useInfiniteQuery, useQuery } from "react-query";

const ListPokemon: React.FunctionComponent<{ navigation: any }> = ({
  navigation,
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
  const handleLoadMore = React.useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) return <ActivityIndicator />;
  if (isError) return <Text>Error fetching data</Text>;

  return (
    <View>
      <FlatList
          data={data?.pages.flat()}
         keyExtractor={(item) => item.name}
         renderItem={({ item }) => (
          <PokedexItem item={item}/>
         )}
         onEndReached={handleLoadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
      />
    </View>
  );
};

export default ListPokemon;
