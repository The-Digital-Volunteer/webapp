import { decorate, observable } from 'mobx'

const EMPTY_USER_DATA = {
  firstName: '',
  lastName: '',
  bankId: '',
  email: '',
  password: '', // TODO: will still be needed with new auth ?
  phone: '',
  address: {
    street: '',
    postalCode: '',
    city: '',
  },
  location: {
    latitude: '',
    longitude: '',
  },
  status: 0,
  role: '',
  about: ''
}

class RegistrationStore {
  termsOfServiceAccepted = false
  user = {}

  static emptyUserData() {
    return JSON.parse( JSON.stringify(EMPTY_USER_DATA) )
  }

  constructor()
    { this.clearUser() }

  clearUser() {
    this.user = RegistrationStore.emptyUserData()
  }
}

decorate( RegistrationStore, {
  termsOfServiceAccepted: observable,
  user: observable
})

export default RegistrationStore
