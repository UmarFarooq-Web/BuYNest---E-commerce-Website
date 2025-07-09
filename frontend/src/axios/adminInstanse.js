import axios from 'axios';

const AdminInstance = axios.create({
  baseURL: 'http://localhost:3000/admin',  
  withCredentials: true,                
  headers: {
    'Content-Type': 'application/json',
  },
});

export default AdminInstance;