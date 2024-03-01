import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';


const Loading: React.FunctionComponent = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../../../../assets/pikachu-running.gif')}
        resizeMode="contain"
        style={styles.image}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    alignItems: 'center', 
  },
  image: {
    width: 100, 
    height: 100,
  },
});

export default Loading;
