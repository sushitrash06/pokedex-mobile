import * as React from "react";
import { ActivityIndicator, FlatList, Image, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, View } from "react-native";
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
      <View style={styles.imageContainer}>
      {isLoading &&
      (
        <Image 
        source={require('../../../../assets/pikachu-running.gif')}
        resizeMode="contain"
        style={styles.image}
        />
      ) 
        }
      </View>
     
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
    marginBottom: 16,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center', 
  },
  image: {
    width: 100, 
    height: 100,
  },
});


export default ListPokemon;