import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'

const Bt1Component = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: 'aqua',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'black',
    fontSize: 16,
  }
})
export default Bt1Component
