import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-native'
import { List, Header, Spinner } from '../components'
import styles from './styles'

class Employees extends Component {

  viewData = (employee) => {
    const { history: { push } } = this.props
    push('/form', { employee })
  }

  render () {
    const { loading, employees, history: { push } } = this.props

    return (
      <View style={styles.container}>
        <Header title="Empleados" />

        <View style={styles.list}>
          {loading && <Spinner />}
          {!loading && 
            <ScrollView style={styles.scroll}>
              <List employees={employees} viewData={this.viewData} />
            </ScrollView>
          }
        </View>
        
        <TouchableOpacity style={styles.add} onPress={() => push('/form', { employee: null })}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  employees: state.users.employees,
  loading: state.status.loading
})

export default connect(mapStateToProps)(withRouter(Employees))