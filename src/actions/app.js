import { getEmployees, getDepartaments } from './'

export const loadApp = () => dispatch => {
  dispatch(getEmployees())
  dispatch(getDepartaments())
}