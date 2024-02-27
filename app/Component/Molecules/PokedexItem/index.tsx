import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Pokemon } from "../../../types";

const PokedexItem: React.FunctionComponent<{ item?: Pokemon }> = ({
  item,
}) => {
  const [imagePokemon , setImage] = React.useState("")
  React.useEffect(()=>{
    const pokemonUrlImage = item?.url.split('/')[item?.url.split('/').length - 2];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonUrlImage}.png`;
    setImage(imageUrl)
  },[imagePokemon,item?.url])

  return (
    <View>
        <View style={styles.card}>
          <Image
             style={styles.image}
             source={{ uri: imagePokemon }}
             resizeMode="contain"
          />
      <Text style={styles.text}>{item?.name}</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 180,
    alignItems:'center',
    borderRadius: 15,
    backgroundColor: '#8EACCD'
  },
  image: {
    width: 100,
    height: 130,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"#2e3057"
  },
});


export default PokedexItem;
