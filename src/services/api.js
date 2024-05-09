import axios from 'axios';

const carsInstance = axios.create({
  baseURL: 'https://65cc87d8dd519126b83ecbb0.mockapi.io/',
});

const load = '12';

const fetchCars = async params => {
  for (let key in params) {
    if (!params[key]) {
      delete params[key];
    }
  }
  const search = new URLSearchParams(params);

  const string = search.toString();

  const { data } = await carsInstance.get(`/car?limit=${load}&${string}`);

  return data;
};

export default fetchCars;
