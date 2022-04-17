import { apiService } from './apiService'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const getUsers = async () => {
  return apiService(
    `${BASE_URL}/users`,
    "GET",
    null,
    null
  )
}

export const getDetailUser = async (data: {id: number}) => {
  return apiService(
    `${BASE_URL}/users/${data.id}`,
    "GET",
    null,
    null
  )
}

export const createUser = async(data: Object) => {
  return apiService(
    `${BASE_URL}/users`,
    "POST",
    data,
    null
  )
}

export const deleteUser = async(data: {id: number}) => {
  return apiService(
    `${BASE_URL}/users/${data.id}`,
    "DELETE",
    null,
    null
  )
}