
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

export async function getMovieById (id) {

  const options = {
    method: 'GET',
    url: `https://imdb-top-100-movies.p.rapidapi.com/${id}`,
    headers: {
      'X-RapidAPI-Key': '4fcb25cc67mshfaff3476e0613fap161b2djsn3bde8ded20be',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error(error);
  }
}