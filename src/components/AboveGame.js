import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native'
import React from 'react'

import Dimensions from '../utils/dimensions'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',    
    marginTop: 10,
    marginBottom: 10,//Dimensions.size["5"],        
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
  },
  text: {
    fontSize: 12,//Dimensions.size["6"],    
  },
  btnContainer: {
    width: Dimensions.screenWidth / 2 - 16,
    backgroundColor: '#5eceb5',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 4,    

    flexDirection: 'column',
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    
    fontSize: 16,//Dimensions.size["8"],    
  }
})

const AboveGame = (props) => {
  //TouchableNativeFeedback
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TouchableNativeFeedback onPress={props.onRestart} background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>RESTART</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={props.onShare}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>SHARE</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}

export default AboveGame
