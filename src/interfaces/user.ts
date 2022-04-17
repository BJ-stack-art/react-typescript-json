interface ICompany {
  name       : string,
  catchPhrase: string,
  bs         : string,
}

interface IAddress {
  city: string,
  street: string,
  suite: string,
  zipcode: string,
}

export interface IUser {
  id      : number,
  name    : string,
  username: string,
  email   : string,
  address : IAddress,
  phone   : string,
  website : string,
  company : ICompany
}

export interface IFormUser {
  name : string,
  username: string,
  email: string,
  phone: string,
  website: string,
}