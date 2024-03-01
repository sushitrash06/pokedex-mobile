import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { UrlImage } from "../../../types";
import Galery from "../../Molecules/Galery";

const Sprite: React.FunctionComponent<UrlImage> = ({ imageUrl, color = "#FFF" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sprites Galery</Text>
      <View style={styles.container}>
      {imageUrl && imageUrl.map((data: string) => {
        return <Galery color={color} key={data} url={data} />;
      })}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 15,
  },
  title:{
    fontWeight: '600',
    fontSize: 15
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
export default Sprite;
