import axios from 'axios';

class ApiService {
  constructor() {
   axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
}
}

const apiService = new ApiService();

export default apiService;