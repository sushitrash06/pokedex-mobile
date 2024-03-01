import React from "react";
import { Image, StyleSheet, View } from "react-native";

interface PokedexItemProps {
  url: string;
  color: string
}

const Galery: React.FunctionComponent<PokedexItemProps> = ({ url, color }) => {
  return (
    <View>
      <View style={[{backgroundColor: color}, styles.card]}>
      <View style={[styles.overlay, { backgroundColor: 'rgba(255, 255, 255, 0.3)' }]} />
        <Image
          style={styles.image}
          source={url ? { uri: url } : require("../../../../assets/pokeBall.png")}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 140,
    height: 140,
    alignItems: "center",
    borderRadius: 10,
    margin: 5 
  },
  image: {
    width: 200,
    height: 130,
    resizeMode: "contain",
    zIndex: 1
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2e3057",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1, // Sesuaikan dengan kebutuhan Anda
  },
});

export default Galery;
