
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://661817739a41b1b3dfbc3d2b.mockapi.io/movies'
})

export const getMovies = async (data) => {
  const resp = await axiosInstance.get(data);
  return resp.data;
}