import axios, { Method } from "axios"

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    Accept: "application/json"
  }
})


export const apiService = (
  url   : string,
  method: Method,
  data  : Object|null,
  params: Object|null
) => {
  return instance({
    method: method,
    url: url,
    data: data,
    params: params
  })
}