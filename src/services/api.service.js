import axios from 'axios';

const axiosConfig = {
	baseURL: 'https://deckofcardsapi.com/api',
	timeout: 30000,
};

const apiService = axios.create(axiosConfig);

export default apiService;
