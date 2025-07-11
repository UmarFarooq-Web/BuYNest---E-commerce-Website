import axios from 'axios';

const UserInstance = axios.create({
  baseURL: 'http://localhost:3000/user',  
  withCredentials: true,                
  headers: {
    'Content-Type': 'application/json',
  },
});

export default UserInstance;