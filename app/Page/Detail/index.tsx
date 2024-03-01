import * as React from "react";
import { Animated, ScrollView, StyleSheet, Text, View } from "react-native";
import { fetchPokemonDetail, fetchPokemonSpecies } from "../../api";
import { useQuery } from "react-query";
import { getIdPokemon, getPokemonUrlImage } from "../../utils";
import PokemonDetail from "../../Component/Organism/Pokemon";
import Sprite from "../../Component/Organism/Sprite";
import Abilities from "../../Component/Organism/Abilites";

const DetailPage: React.FunctionComponent<{ route: any, navigation:any }> = ({ route, navigation }) => {
  const { url } = route.params;
  const id = getIdPokemon(url);
  const { data } = useQuery("PokemonDetail", async () => {
    return await fetchPokemonDetail(parseInt(id));
  });
  const { data:dataPokemonSpecies } = useQuery("PokemonSpecies", async () => {
    return await fetchPokemonSpecies(parseInt(id));
  });
;
  const isString = (value: any) => typeof value === "string";
  const getStringValues = (obj: any) => {
    let stringValues = [];
    for (let key in obj) {
      const value = obj[key];
      if (isString(value)) {
        stringValues.push(value);
      }
    }

    return stringValues;
  };

  const stringValuesArray = getStringValues(data && data?.sprites);
  return (
      <ScrollView
      style={styles.container}>
        <View>
          <PokemonDetail
            color={dataPokemonSpecies?.color?.name}
            name={data?.name}
            url={getPokemonUrlImage(url)}
            types={data?.types}
          />
          <Sprite  color={dataPokemonSpecies?.color?.name} imageUrl={stringValuesArray} />
          <Abilities stats={data?.stats} abilities={data?.abilities} />
        </View>
      </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  loading: {
    width: "100%",
    marginTop: "50%",
    alignItems: "center",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1, // Pastikan header berada di atas konten utama
  },
});

export default DetailPage;
