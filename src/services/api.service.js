import axios from 'axios';

class ApiService {
  constructor() {
    this.data = axios.get({
      baseURL: 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
    })
  }
  getAllData() {
    return this.data
    .then(res => res.json());
  }
}

const apiService = new ApiService();

export default apiService;