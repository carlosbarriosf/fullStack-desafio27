// import { useEffect, useState } from "react";
// import { getMovies } from "./assets/api";

import RoutesApp from "./router/RoutesApp";

function App() {

  // const [movies, setMovies] = useState([])

  // useEffect(() => {
  //   getMovies().then(data => setMovies(data)).catch(err => console.error(err))
  // }, [])


  return (
    <div className="App">
      <RoutesApp />
    </div>
  );
}

export default App;
