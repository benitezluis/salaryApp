import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.titleHeader}>{title}</Text>
  </View>
)

export default Header