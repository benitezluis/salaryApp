import { LOAD_EMPLOYEES, LOAD_DEPARTAMENTS, SAVE_USERDATA } from '../configs/types'
const emp = [
  {
    name: 'Luis',
    lastname: 'Benitez',
    departament: 'Programmer'
  },
  {
    name: 'Luis',
    lastname: 'Benitez',
    departament: 'Programmer'
  },
  {
    name: 'Luis',
    lastname: 'Benitez',
    departament: 'Programmer'
  },
  {
    name: 'Luis',
    lastname: 'Benitez',
    departament: 'Programmer'
  },
  {
    name: 'Luis',
    lastname: 'Benitez',
    departament: 'Programmer'
  },
  {
    name: 'Luis',
    lastname: 'Benitez',
    departament: 'Programmer'
  },
  {
    name: 'Luis',
    lastname: 'Benitez',
    departament: 'Programmer'
  },
  {
    name: 'Luis',
    lastname: 'Benitez',
    departament: 'Programmer'
  },
  {
    name: 'Luis',
    lastname: 'Benitez',
    departament: 'Programmer'
  },
  {
    name: 'Luis',
    lastname: 'Benitez',
    departament: 'Programmer'
  },
  {
    name: 'Luis',
    lastname: 'Benitez',
    departament: 'Programmer'
  },
  {
    name: 'Luis',
    lastname: 'Benitez',
    departament: 'Programmer'
  },
  {
    name: 'Luis',
    lastname: 'Benitez',
    departament: 'Programmer'
  },
  {
    name: 'Luis',
    lastname: 'Benitez',
    departament: 'Programmer'
  },
  {
    name: 'Luis',
    lastname: 'Benitez',
    departament: 'Programmer'
  }
]

export default (state = {
  employees: [],
  departaments: [],
  loadInfo: false
}, action) => {
  switch (action.type) {
    case LOAD_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
        loadInfo: true
      }

    case LOAD_DEPARTAMENTS: 
      return {
        ...state,
        departaments: action.payload
      }

    case SAVE_USERDATA: 
      return {
        ...state,
        employees: action.payload
      }

    default:
      return state;
  }
}
