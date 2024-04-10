import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonComponent = (props: any) =>
(<TouchableOpacity
  onPress={props.onPress}
  style={[
    {
      backgroundColor: 'pink',
      alignSelf: 'center',
      padding: 10,
      margin: 10,
    },
    props.style
  ]}>
  <Text style={{ color: 'white' }}>{props.title}</Text>
</TouchableOpacity >
)

const Bt3Component = () => {
  return (
    <View style={styles.container}>
      <ButtonComponent title='Say hello' onPress={() => Alert.alert('Hello')} />
      <ButtonComponent title='Say goodbye'
        onPress={() => Alert.alert('Goodbye')}
      />
    </View>
  )
}

export default Bt3Component

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})