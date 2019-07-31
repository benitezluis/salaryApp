import { LOADING_APP } from '../configs/types'

export * from './employees'
export * from './app'


export const loading = (active) => (dispatch) => {
  dispatch({
    type: LOADING_APP,
    payload: { active, text: '' }
  })
}