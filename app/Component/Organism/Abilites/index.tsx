import * as React from "react";
import { Text, View } from "react-native";
import { Abilities, AbilitiesPage, Stats } from "../../../types";
import { BASE_STATE_COLORS } from "../../../constant";
import { styles } from "./styles";

const AbilitiesPokemon: React.FunctionComponent<AbilitiesPage> = ({
  abilities,
  stats,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Abilities</Text>
      <View style={styles.flexContainer}>
        {abilities?.map((data: Abilities) => {
          return (
            <View key={data?.ability?.name} style={styles.abilityItem}>
              <Text style={styles.textItemAbility}>{data?.ability?.name}</Text>
            </View>
          );
        })}
      </View>
      <View style={{width:'auto', margin: 10}}>
        {stats?.map((data: Stats) => {
          const percentage = (data.base_stat/255) * 100;
          return (
            <View key={data?.stat?.name} style={styles.flexContainer}>
              <View style={{width:'35%'}}>
                <Text style={styles.itemText}>{data?.stat?.name}</Text>
              </View>
              <View style={{width:'10%'}}>
                <Text style={styles.itemText}>{data.base_stat}</Text>
              </View>
              <View style={{width:'55%', flexDirection:'row'}}>
              <View
                style={[styles.bar,{
                  width: `${Math.round(percentage)}%`,
                  borderBottomLeftRadius: 15,
                  borderTopLeftRadius: 15,
                  backgroundColor:
                    BASE_STATE_COLORS[data?.stat?.name.replace(/-/g, "")],
                }]}
              >
              </View>
              <View
                style={[styles.bar,{
                  width: `${100 - Math.round(percentage)}%`,
                  marginVertical: 5,
                  backgroundColor:"#B5B5C3",
                  height: 10,
                  borderBottomRightRadius: 15,
                  borderTopRightRadius: 15,
                }]}
              >
              </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default AbilitiesPokemon;
