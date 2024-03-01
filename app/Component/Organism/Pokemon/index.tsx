import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { PokemonHeadDetail, Types } from "../../../types";
import ButtonComponent from "../../Atoms/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { TYPE_COLORS } from "../../../constant";
import { styles } from "./styles";
import { MMKV } from "react-native-mmkv";
export const storage = new MMKV();
const PokemonDetail: React.FunctionComponent<PokemonHeadDetail> = ({
  name,
  url,
  color,
  types,
}) => {
  const favorites = JSON.parse(storage.getString('favorites') || '[]');
  console.log(storage.getString("favorites"))
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.headImagePokemon, { backgroundColor: color }]}>
          <View
            style={[
              styles.overlay,
              { backgroundColor: "rgba(255, 255, 255, 0.4)" },
            ]}
          />
          <Image
            style={styles.image}
            source={
              url ? { uri: url } : require("../../../../assets/pokeBall.png")
            }
          />
        </View>
        <View style={styles.pokemonData}>
          <View style={styles.titleHead}>
            <Text style={styles.textName}>{name}</Text>
            <ButtonComponent
              type="transparent"
              Icon={
                <MaterialIcons
                  name="favorite-border"
                  size={30}
                  style={{
                    marginTop: -15,
                    color: "#2e3057",
                  }}
                />
              }
              onPress={() => {
                const newFavorite = {
                  name: name,
                  url: url,
                  color: color
                };
                const updatedFavorites = [...favorites, newFavorite];
                storage.set("favorites", JSON.stringify(updatedFavorites));
              }}
            />
          </View>
          <View style={styles.typePokemon}>
            {types &&
              types?.map((data: Types) => {
                return (
                  <View
                    key={data.type.name}
                    style={[
                      styles.itemType,
                      { backgroundColor: TYPE_COLORS[data?.type?.name] },
                    ]}
                  >
                    <Text style={styles.textItem}>{data?.type?.name}</Text>
                  </View>
                );
              })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default PokemonDetail;
