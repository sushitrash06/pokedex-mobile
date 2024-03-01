import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    margin: 20,
    width:'auto'
  },
  bar:{
    height: 10,
    position:'relative',
    marginVertical: 5,
  },
  title: {
    fontWeight: "600",
    fontSize: 15,
  },
  image: {
    width: 100,
    height: 130,
    resizeMode: "contain",
  },
  flexContainer: {
    flexDirection: "row",
    maxWidth: 'auto',
    flexWrap: "wrap",
  },
  abilityItem: {
    backgroundColor: "#CCD3CA",
    padding: 5,
    borderRadius: 15,
    margin: 5,
  },
  textItemAbility: {
    fontWeight: "600",
    fontSize: 15,
    padding: 2
  },
  itemText:{
    textTransform:'capitalize',
    fontSize: 12
  }
});