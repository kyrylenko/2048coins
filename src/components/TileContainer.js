import { View } from 'react-native';
import React from 'react';
import Tile from './Tile';
import Dimensions from '../utils/dimensions';
const { width } = Dimensions.get('window');

const styles = {
  container: {
    width: width - Dimensions.size['10'],
    height: width - Dimensions.size['10'],
    position: 'absolute',
    left: 0,
    top: 0,
    overflow: 'hidden',
  }
}

const TileContainer = ({ tiles }) => {

  return (
    <View style={styles.container}>
      {tiles.map(item => <Tile
        x={item.x}
        y={item.y}
        value={item.value}
        key={item.prog}
        previousPosition={item.previousPosition || null} />)}
    </View>
  );
}
export default TileContainer;