import React from 'react'
import { FlatList } from 'react-native'
import Employee from './Employee'
import styles from './styles'

const List = ({ employees, viewData }) => (
  <FlatList
    style={styles.list}
    data={employees}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <Employee employee={item} viewData={viewData} />}
  />
)

export default List