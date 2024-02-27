import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonComponent from "../../Atoms/Button";
import { MaterialIcons } from "@expo/vector-icons";
interface IAppProps {
  onPress: () => void;
}

const HeadHomePage: React.FunctionComponent<IAppProps> = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          type="transparent"
          Icon={
            <MaterialIcons
              name="favorite-border"
              size={24}
              style={{
                marginTop: -15,
                color: "#2e3057",
              }}
            />
          }
          onPress={onPress}
        />
      </View>
      <Text style={styles.text}>Pokédex</Text>
      <Text style={styles.textSub}>Discover Pokemon! search your pokemon by name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
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
  },
  
  buttonContainer: {
    position: "absolute",
    paddingTop: 30,
    right: 10,
  },
});

export default HeadHomePage;
