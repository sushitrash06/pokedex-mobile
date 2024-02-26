import * as React from "react";
import { Text, View } from "react-native";
interface Pokemon {
  name: string;
  url: string;
}
const PokedexItem: React.FunctionComponent<{ item?: Pokemon }> = ({
  item,
}) => {
  return (
    <View>
        <View style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}>
      <Text>{item?.name}</Text>
    </View>
    </View>
  );
};

export default PokedexItem;
