import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonComponent from "../../Atoms/Button";
import { MaterialIcons } from "@expo/vector-icons";

interface IAppProps {
  title: string;
  onPress: () => void;
}

const HeaderMain: React.FunctionComponent<IAppProps> = ({ title, onPress }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          type="transparent"
          Icon={
            <MaterialIcons
              name="favorite-border"
              size={24}
              style={{
                marginTop: -15,
                color: "#c5d4c9",
              }}
            />
          }
          onPress={onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#344955",
    height: 80,
    flexDirection: "row",
    justifyContent: "center", // Pusatkan elemen secara horizontal
    alignItems: "center", // Pusatkan elemen secara vertikal
  },
  headerText: {
    color: "#c5d4c9",
    fontSize: 20,
    paddingTop: 30,
    textAlign: "center",
  },
  buttonContainer: {
    position: "absolute",
    paddingTop: 30,
    right: 10,
  },
});

export default HeaderMain;
