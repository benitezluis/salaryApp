import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const Employee = ({ employee, viewData }) => {
  const { name, lastname, departament } = employee
  
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name} {lastname}</Text>
      <Text style={styles.secondary}>{departament}</Text>
      <TouchableOpacity style={styles.view} onPress={() => viewData(employee)}>
        <Text style={styles.viewText}>Ver</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Employee