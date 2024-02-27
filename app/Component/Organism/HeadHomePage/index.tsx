import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeadHomePage: React.FunctionComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Pokédex</Text>
      <Text style={styles.textSub}>Discover Pokemon! search your pokemon by name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: '700',
    color: '#2e3057',
    marginHorizontal: 20,
    marginTop: 25
  },
  textSub: {
    fontSize: 15,
    fontWeight: '500',
    color: '#9b9eb0',
    marginHorizontal: 20
  }
});

export default HeadHomePage;
