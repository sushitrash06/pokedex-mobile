import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  typePokemon: {
    flexDirection: 'row',
    flexWrap: "wrap",
  },
  itemType:{
    margin: 5,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    textAlign:'center'
  },
  textItem:{
    fontWeight:'600',
    textAlign:'center',
    color: '#F0ECE5',
  },
  titleHead: {
    width: '100%',
    flexDirection:'row',
    justifyContent:"space-between",
  },
  textName: {
    fontWeight:"700",
    fontSize: 25,
    textTransform:"capitalize"
  },
  pokemonData: {
    backgroundColor: "#FFFF",
    padding: 15,
    paddingTop: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -50,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
    marginTop: 20,
    zIndex: 999
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999, // Sesuaikan dengan kebutuhan Anda
  },
headImagePokemon:{
   width:'100%',
   alignItems:'center',
   height: 350
}
});