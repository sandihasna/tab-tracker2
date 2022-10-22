import axios from 'axios'

// url backend / database
export default () => {
  return axios.create({
    baseURL: 'http://localhost:8081/'
  })
}
