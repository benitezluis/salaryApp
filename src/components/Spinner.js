import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import styles from './styles'

const Spinner = ({ color = 'black', size = 'large' }) => (
  <View style={[styles.container]}>
    <ActivityIndicator size={size} color={color} />
  </View>
)

export default Spinner