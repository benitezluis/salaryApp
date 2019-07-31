import { StyleSheet } from 'react-native'
import { colors } from '../theme/base'

export default StyleSheet.create({
  card: {
    width: '100%',
    padding: 16,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#fafafa',
    backgroundColor: 'white',
    borderRadius: 5,
    position: 'relative'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    paddingBottom: 3
  },
  secondary: {
    color: colors.textSecondary
  },
  view: {
    justifyContent: 'center',
    position: 'absolute',
    right: 16,
    top: 0,
    bottom: 0
  },
  viewText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary
  },
  list: {
    marginBottom: 120
  },
  header: {
    flex: 1,
    paddingLeft: 24,
    justifyContent: 'center',
    backgroundColor: colors.primary 
  },
  titleHeader: {
    marginTop: 10,
    color: 'white',
    fontSize: 20,
    alignItems: 'center'
  },
})