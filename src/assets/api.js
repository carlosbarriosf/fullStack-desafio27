
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '5bda60e0efmshe0cd9aa97106112p192070jsndf571fec4981',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

export async function getMovies () {
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}