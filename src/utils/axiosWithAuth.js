import axios from 'axios'

export const axiosWithAuth = () => {
  // retrieve JWT auth token from localStorage/sessionStorage
  const token = localStorage.getItem('token')

  // create axios instance with Auth token
  return axios.create({
    baseURL: 'https://bw-life-gpa.herokuapp.com',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`
    }
  })
}
