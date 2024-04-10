import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

const Bt7Component = () => {
  const [name, setName] = useState('')
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Whate is your name? </Text>
      <TextInput
        style={{
          backgroundColor: '#ccc',
          borderRadius: 10,
          padding: 10,
        }}
        value={name}
        onChangeText={(val) => (setName(val))}
        placeholder='John Doe' />
      <TouchableOpacity
        style={{ marginTop: 20, padding: 10 }}
        onPress={() => {
          Alert.alert(`Hello ${name}`)
          setName('')
        }}
      >
        <Text style={{ textAlign: 'center', color: 'blue' }}>Say Hello</Text>
      </TouchableOpacity>
    </View >
  )
}

export default Bt7Component

