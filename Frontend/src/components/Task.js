import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Task(props) {
  return (
    <View>
      <Text {...props} />
    </View>
  )
}
