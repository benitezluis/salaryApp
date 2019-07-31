import { LOADING_APP } from '../configs/types'

export default (state = {
  loading: false,
  text: ''
}, action) => {
  switch (action.type) {
    case LOADING_APP:
      return {
        ...state,
        loading: action.payload.active,
        text: action.payload.text
      }

    default:
      return state;
  }
}