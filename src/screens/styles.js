import { StyleSheet } from 'react-native'
import { colors, W } from '../theme/base'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  list: {
    flex: 6,
  },
  scroll: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10
  },
  add: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    backgroundColor: colors.secondary,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center'
  },
  plus: {
    color: 'white',
    fontSize: 32,
    marginTop: -2
  },
  formContainer: {
    width: W,
    padding: 20
  },
  labels: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 3,
    paddingBottom: 0,
    color: colors.text,
    marginTop: 18,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#9C9C9C',
    padding: 8,
  },
  btn: {
    width: '80%',
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  btnSave: {
    backgroundColor: colors.primary,
  },
  btnEdit: {
    backgroundColor: '#363636'
  },
  btnRemove: {
    backgroundColor: 'red'
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5
  },
  btnSide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})