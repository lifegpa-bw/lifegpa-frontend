import axios from 'axios'

export const axiosWithAuth = () => {
  // retrieve JWT auth token from localStorage/sessionStorage
  const token = localStorage.getItem('token')

  // create axios instance with Auth token
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`
    }
  })
}
