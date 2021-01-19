import axios from 'axios'

const baseDomain = 'localhost:3001'
const baseURL = `http://${baseDomain}`

export default axios.create({
  baseURL
})
