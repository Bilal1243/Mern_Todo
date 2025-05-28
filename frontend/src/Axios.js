import axios from 'axios'

const BackendInstance = axios.create({
  baseURL: 'http://localhost:5000/api/todo'
});


export default BackendInstance