import * as React from 'react';
import { Text, View } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import ListPokemon from '../../Component/Organism/ListPokemon';
export const storage = new MMKV();

const FavoritePage: React.FunctionComponent<{navigation:any}> = ({navigation}) => {
  const favoritesString = storage.getString('favorites');
  const favorites = JSON.parse(favoritesString || '[]');
  console.log(favorites)
  return (
    <View>
      <ListPokemon dataList={favorites} navigation={navigation} type='fav'/>
    </View>
  );
};

export default FavoritePage;
