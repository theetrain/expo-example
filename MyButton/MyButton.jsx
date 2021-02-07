import React from 'react'
import { View, Text } from 'react-native'

const MyButton = ({ children }) => (
  <View accessibilityRole="button">
    <Text>{children}</Text>
  </View>
)

export default MyButton
