import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SquareComponent = ({ text = '' }) => (
  <View style={{ width: 100, height: 100, backgroundColor: 'aqua', margin: 20, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{text}</Text>
  </View>
)
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const Bt6Component = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      {
        data.map((cur, i) =>
          (<SquareComponent text={`Square ${i + 1}`} />))
      }
    </ScrollView>
  )
}

export default Bt6Component

const styles = StyleSheet.create({})