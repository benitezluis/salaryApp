import React, { Component } from 'react'
import { View, Platform, StyleSheet, SafeAreaView } from 'react-native'
import { NativeRouter, Route, AndroidBackButton } from 'react-router-native'
import { connect } from 'react-redux'
import ListEmployees from './screens/List'
import Form from './screens/Form'
import { H, W, colors } from './theme/base'
import { loadApp } from './actions'

class Routes extends Component {

  componentDidMount = () => {
    this.props.loadApp()
  }

  render() {
    const routes = (
      <View style={styles.routes}>
        <Route exact path="/" component={ListEmployees} />
        <Route exact path="/form" component={Form} />
      </View>
    )

    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <NativeRouter>
              {Platform.OS === 'ios' ?
                  <SafeAreaView>{routes}</SafeAreaView> :
                  <AndroidBackButton>{routes}</AndroidBackButton>
              }
          </NativeRouter>
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loadApp: () => dispatch(loadApp())
})

const styles = StyleSheet.create( {
	container: {
    width: W,
    height: H,
    backgroundColor: colors.background
  },
  routes: {
    width: W,
    height: H
  }
});

export default connect(null, mapDispatchToProps)(Routes)
