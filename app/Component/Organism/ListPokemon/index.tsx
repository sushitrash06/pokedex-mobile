import * as React from "react";
import { ActivityIndicator, FlatList, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, View } from "react-native";
import { fetchPokemonList } from "../../../api";
import { useInfiniteQuery, useQuery } from "react-query";
import PokedexItem from "../../Molecules/PokedexItem";
import { Pokemon } from "../../../types";

interface PropsList {
  navigation: any;
  dataList: Pokemon[];
  isLoading?: boolean;
  onScroll?: ((event: NativeSyntheticEvent<NativeScrollEvent>) => void) | undefined
}

const ListPokemon: React.FunctionComponent<PropsList> = ({
  navigation,
  dataList,
  isLoading = false,
  onScroll
}) => {
  
  return (
    <View
      style={styles.container}
      >
      {dataList.map((pokemon: Pokemon , index:number) => (
        <View key={index} style={styles.rowContainer}>
          <PokedexItem item={pokemon} />
        </View>
      ))}
      {isLoading && <ActivityIndicator />}
    </View>
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