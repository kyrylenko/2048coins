import {
	View,
	PanResponder,
} from 'react-native';
import React, {
	Component
} from 'react';
import GameMessage from './GameMessage';
import GridContainer from './GridContainer';
import TileContainer from './TileContainer';
import Dimensions from '../utils/dimensions';
const { width } = Dimensions.get('window');


const styles = {
	container: {
		width: width - Dimensions.size['10'],
		height: width - Dimensions.size['10'],
		backgroundColor: '#d8d8d8',
		borderRadius: Dimensions.size['2'],
	}
}

class GameContainer extends Component {

	componentWillMount() {
		this._panResponder = PanResponder.create({
			onStartShouldSetPanResponder: (e, gestureState) => true,
			onMoveShouldSetPanResponder: (e, gestureState) => true,
			onPanResponderGrant: (e, gestureState) => {
				if (this.moving == false) {
					this.moving = true
				}
			},
			onPanResponderMove: (e, gestureState) => { },
			onPanResponderRelease: (e, gestureState) => {
				if (this.moving) {
					this.moving = false

					const dx = gestureState.dx;
					const dy = gestureState.dy;
					const absDx = dx > 0 ? dx : -dx;
					const absDy = dy > 0 ? dy : -dy;
					const canMove = absDx > absDy ? absDx - absDy > 10 : absDx - absDy < -10;
					if (canMove) {
						this.props.move(absDx > absDy ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0));
					}
				}
			}
		})
		this.moving = false;
	}

	render() {
		return (
			<View {...this._panResponder.panHandlers} style={styles.container}>
				<GridContainer />
				<TileContainer tiles={this.props.tiles} />
				<GameMessage
					won={this.props.won}
					over={this.props.over}
					onKeepGoing={this.props.onKeepGoing}
					onTryAagin={this.props.onTryAagin}
				/>
			</View>
		)
	}
}

export default GameContainer
