import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonComponent from "../../Atoms/Button";
import { MaterialIcons } from "@expo/vector-icons";

interface IAppProps {
  title: string;
  onPress: () => void;
  color?: string;
  textColor?: string;
  back?: boolean;
  navigation:any;
}

const HeaderMain: React.FunctionComponent<IAppProps> = ({
  back = false,
  textColor = "#25587f",
  color = "#f4ca10",
  title,
  onPress,
  navigation
}) => {
  return (
    <View style={[styles.header, { backgroundColor: color }]}>
      <View
        style={[
          styles.overlay,
          { backgroundColor: "rgba(255, 255, 255, 0.4)" },
        ]}
      />
      {
        back && (
          <View style={styles.buttonContainerLeft}>
          <ButtonComponent
            type="transparent"
            Icon={
              <MaterialIcons
                name="arrow-back"
                size={24}
                style={{
                  marginTop: -15,
                  color: textColor,
                }}
              />
            }
            onPress={()=>{
              navigation.goBack()
            }}
          />
        </View>
        )
      }
  
      <Text style={[styles.headerText, { color: textColor }]}>{title}</Text>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          type="transparent"
          Icon={
            <MaterialIcons
              name="favorite-border"
              size={24}
              style={{
                marginTop: -15,
                color: textColor,
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
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
    paddingTop: 30,
    textAlign: "center",
  },
  buttonContainer: {
    position: "absolute",
    paddingTop: 30,
    right: 10,
    zIndex: 1
  },
  buttonContainerLeft: {
    position: "absolute",
    paddingTop: 30,
    left: 10,
    zIndex: 1
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1, // Sesuaikan dengan kebutuhan Anda
  },
});

export default HeaderMain;
