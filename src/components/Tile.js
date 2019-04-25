import {
  StyleSheet,
  Animated,
} from 'react-native';
import React from 'react';

import Dimensions from '../utils/dimensions';
const { width } = Dimensions.get('window');

const MARGIN_WIDTH = Dimensions.size['2'];
const ITEM_WIDTH = (width - Dimensions.size['10'] - MARGIN_WIDTH * 10) / 4;

const styles = StyleSheet.create({
  tile: {
    position: 'absolute',
    borderRadius: Dimensions.size['1'],
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
  },
})

const IMAGES = {
  image2: require('../images/2.png'),
  image4: require('../images/4.png'),
  image8: require('../images/8.png'),
  image16: require('../images/16.png'),
  image32: require('../images/32.png'),
  image64: require('../images/64.png'),
  image128: require('../images/128.png'),
  image256: require('../images/256.png'),
  image512: require('../images/512.png'),
  image1024: require('../images/1024.png'),
  image2048: require('../images/2048.png'),
}

export default class Tile extends React.Component {
  componentWillMount() {
    this.aimatedScale = new Animated.Value(.1);
  }

  componentDidMount() {
    Animated.spring(this.aimatedScale, {
      //tension: 80,
      //friction: 15,
      velocity: 30,
      //bounciness: 16,
      toValue: 1,
    }).start();
  }

  componentWillReceiveProps(nextProps) {
    //console.log('componentWillReceiveProps');
    this.isHorizontalMove = nextProps.x !== this.props.x;
    const fromVal = (this.isHorizontalMove ? this.props.x : this.props.y) * (ITEM_WIDTH + MARGIN_WIDTH * 2) + MARGIN_WIDTH * 2;
    this.aimationValue = new Animated.Value(fromVal);
  }

  componentDidUpdate(prevProps) {
    Animated.timing(this.aimationValue, {
      //easing: Easing.back(),
      duration: 150,
      toValue: (this.isHorizontalMove ? this.props.x : this.props.y) * (ITEM_WIDTH + MARGIN_WIDTH * 2) + MARGIN_WIDTH * 2,
    }).start();
  }

  render() {
    const tilePositionStyle = {
      left: this.props.previousPosition && this.isHorizontalMove
        ? this.aimationValue
        : this.props.x * (ITEM_WIDTH + MARGIN_WIDTH * 2) + MARGIN_WIDTH * 2,
      top: this.props.previousPosition && !this.isHorizontalMove
        ? this.aimationValue
        : this.props.y * (ITEM_WIDTH + MARGIN_WIDTH * 2) + MARGIN_WIDTH * 2,
    }

    const animatedScaleStyle = {
      transform: [{ scale: this.aimatedScale }]
    };

    return (
      <Animated.View style={[styles.tile, { backgroundColor: '#ffffff' }, tilePositionStyle]}>
        <Animated.Image source={IMAGES['image' + this.props.value]} style={animatedScaleStyle} />
      </Animated.View>
    );
  }
}
