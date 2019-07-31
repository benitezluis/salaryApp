import firebase from 'react-native-firebase'
import { LOAD_EMPLOYEES, LOAD_DEPARTAMENTS } from '../configs/types'
import { loading } from './'

const db = firebase.database()

export const getEmployees = () => async (dispatch) => {
  dispatch(loading(true))
  const data = await db.ref('/employees').once('value')
  const values = data.val()
  const employees = values ? Object.keys(values).map(key => ({ id: key, ...values[key] })) : []

  dispatch({
    type: LOAD_EMPLOYEES,
    payload: employees
  })
  
  dispatch(loading(false))
}

export const getDepartaments = () => async (dispatch) => {
  const data = await db.ref('/departaments').once('value')
  const departaments = data.val()

  dispatch({
    type: LOAD_DEPARTAMENTS,
    payload: departaments
  })
}

export const saveEmployee = (data) => async (dispatch) => {
  try {
    await db.ref('/employees').push(data)
    dispatch(getEmployees())
    return true
  }
  catch(error) {
    return false
  }
}

export const updateEmployee = (id, data) => async (dispatch) => {
  try {
    await db.ref(`/employees/${id}`).update(data)
    dispatch(getEmployees())
    return false
  }
  catch (error) {
    return false
  }
}

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    await db.ref(`/employees/${id}`).remove()
    dispatch(getEmployees())
    return true
  }
  catch (error) {
    return false
  }
}