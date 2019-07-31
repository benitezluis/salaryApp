import React, { Component } from 'react'
import {
  View,
  Alert,
  Text,
  TouchableOpacity,
  TextInput,
  Picker,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { connect } from 'react-redux'
import { saveEmployee, updateEmployee, deleteEmployee } from '../actions'
import { Header } from '../components'
import styles from './styles'

class Form extends Component {
  state = {
    id: null,
    isLoad: false,
    edit: false,
    name: '',
    lastname: '',
    departament: '',
    salary: ''
  }

  componentDidMount = () => {
    const { departaments, location: { state: { employee } } } = this.props

    this.setEmployee(employee, departaments[0])
  }

  changeValue = (field, value) => {
    this.setState({ [field]: value })
  }

  save = async () => {
    const { id, edit, name, lastname, salary, departament } = this.state
    const { saveEmployee, updateEmployee, history: { push } } = this.props
    const validations = this.validations()

    if (validations.validation) {
      const data = {
        name,
        lastname,
        salary,
        departament
      }

      const response = await edit ? updateEmployee(id, data) : saveEmployee(data)
      response ? push('/') : Alert.alert('Error', 'Ocurrio un error al guardar')
    }
    else {
      Alert.alert('Error', validations.msg)
    }
  }

  remove = () => {
    const { id } = this.state
    const { deleteEmployee, history: { push } } = this.props

    Alert.alert(
      'Eliminar',
      '¿Estas seguro que deseas eliminar este usuario?',
      [
        {
          text: 'Cancelar',
          onPress: () => '',
          style: 'cancel',
        },
        { 
          text: 'Eliminar', 
          onPress: async () => {
            const response = await deleteEmployee(id)
            response ? push('/') : Alert.alert('Error', 'Ocurrio un error al guardar')
          }
        },
      ],
      { cancelable: false },
    )
  }

  validations = () => {
    const { name, lastname, salary } = this.state

    if (name === '') {
      return { validation: false, msg: 'El nombre es requerido' }
    }

    if (lastname === '') {
      return { validation: false, msg: 'El apellido es requerido' }
    }

    if (salary === '') {
      return { validation: false, msg: 'El salario es requerido' }
    }

    return { validation: true, msg: '' }
  }

  setEmployee = (employee, departament) => {
    if (employee) {
      this.setState({
        ...employee,
        isLoad: true,
        edit: true,
      })
    }
    else {
      this.setState({ isLoad: true, departament: departament.name })
    }
  }

  render () {
    const { departaments } = this.props
    const { name, lastname, departament, salary, isLoad, edit } = this.state


    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={styles.container}>
        <View style={styles.container}>
          <Header title={edit ? 'Editar usuario' : 'Nuevo usuario'} />

          {isLoad && 
            <View style={styles.list}>
              <View style={styles.formContainer}>
                <Text style={styles.labels}>Nombre</Text>
                <TextInput
                  placeholder="Nombre"
                  value={name}
                  style={styles.input}
                  onChangeText={( text ) => this.changeValue('name', text)} />

                <Text style={styles.labels}>Apellido</Text>
                <TextInput
                  placeholder="Apellido"
                  value={lastname}
                  style={styles.input}
                  onChangeText={( text ) => this.changeValue('lastname', text)} />

                <Text style={styles.labels}>Salario</Text>
                <TextInput
                  placeholder="Salario"
                  value={salary}
                  style={styles.input}
                  onChangeText={( text ) => this.changeValue('salary', text)} />

                <Text style={styles.labels}>Departamento</Text>
                <Picker
                  selectedValue={departament}
                  style={styles.input}
                  onValueChange={(itemValue) => this.changeValue('departament', itemValue)}>
                    {departaments.map(departament => 
                      <Picker.Item label={departament.name} value={departament.name} key={departament.name} />
                    )}
              </Picker>
              </View>
              
              {!edit &&
                <View style={styles.btnContainer}>
                  <View style={styles.btnSide}>
                    <TouchableOpacity onPress={this.save} style={[styles.btn, styles.btnSave]}>
                      <Text style={styles.btnText}>Guardar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              }
            
              {edit && 
                <View style={styles.btnContainer}>
                  <View style={styles.btnSide}>
                    <TouchableOpacity onPress={this.save} style={[styles.btn, styles.btnEdit]}>
                      <Text style={styles.btnText}>Editar</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.btnSide}>
                    <TouchableOpacity onPress={this.remove} style={[styles.btn, styles.btnRemove]}>
                      <Text style={styles.btnText}>Eliminar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              }
            </View>
          }
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = state => ({
  departaments: state.users.departaments
})

const mapDispatchToProps = dispatch => ({
  saveEmployee: (data) => dispatch(saveEmployee(data)),
  updateEmployee: (id, data) => dispatch(updateEmployee(id, data)),
  deleteEmployee: (id) => dispatch(deleteEmployee(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)