import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getPokemonUrlImage } from "../../../utils";
import CardBox from "../../Atoms/Card";

interface PokedexItemProps {
  name: string;
  url: string;
  navigation: any;
}

const PokedexItem: React.FunctionComponent<PokedexItemProps> = ({ name, url, navigation }) => {
  const [imagePokemon, setImage] = React.useState("");


  React.useEffect(() => {
    const pokemonUrlImage = getPokemonUrlImage(url)
    setImage(pokemonUrlImage);
  }, [imagePokemon, url]);

  const navigateToDetailPage = () => {
    navigation.navigate("DetailPage", { url:url }); // Explicitly annotate the type of the parameter
  };

  return (
    <TouchableOpacity onPress={navigateToDetailPage}>
      <CardBox>
        <Image
          style={styles.image}
          source={imagePokemon ? { uri: imagePokemon } : require("../../../../assets/pokeBall.png")}
          resizeMode="contain"
        />
        <Text style={styles.text}>{name}</Text>
      </CardBox>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 130,
    resizeMode: "contain",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ece9d7",
  },
});

export default PokedexItem;
