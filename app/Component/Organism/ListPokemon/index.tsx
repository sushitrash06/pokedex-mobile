import * as React from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import PokedexItem from "../../Molecules/PokedexItem";
import { Pokemon } from "../../../types";
import Loading from "../../Atoms/Loading";

interface PropsList {
  dataList: Pokemon[];
  isLoading?: boolean;
  navigation: any;
  type: 'fav' | 'list'
}

const ListPokemon: React.FunctionComponent<PropsList> = ({
  dataList,
  isLoading = false,
  navigation,
  type
}) => {
  return (
    <View style={styles.container}>
      {dataList.map((pokemon: Pokemon, index: number) => (
        <View key={index} style={styles.rowContainer}>
          <PokedexItem name={pokemon.name} url={pokemon.url} navigation={navigation} type={type}
          />
        </View>
      ))}
      <View style={styles.imageContainer}>{isLoading && <Loading />}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },
  rowContainer: {
    marginBottom: 16,
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default ListPokemon;
