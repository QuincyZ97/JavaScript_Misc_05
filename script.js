const makeGenreList = async () => {
  const jsonGenreList = await getGenres();
  console.log("Done getting list of genres")

  const movieDisplayList = document.getElementById("genreList") // get UL 

  const addMoviesToDom = (database) => {

    let moviesLiArray = database.genres.map(movie => {
        const newLi = document.createElement("li"); // make li element for each movie
        const newSpan = document.createElement("span"); // make span
        newSpan.innerHTML = "Genre naam: "+ movie.name + ", " + "id: " + movie.id ;
        newLi.appendChild(newSpan); // span into UL
      return newLi;
    })
  
    moviesLiArray.forEach(movie => {
      movieDisplayList.appendChild(movie); // li in ul
    })
    
  }
  
  addMoviesToDom(jsonGenreList)
}
makeGenreList();

///==============================================================
const getfavmovieItem = async () => {

  const myFavMovie = await getfavmovie();
  console.log("Done getting Favourite Movie")
  const favMovieDisplay = document.getElementById("favMovie") // get H2
  const newi = document.createElement("i");
  newi.innerHTML = myFavMovie.movie_results[0].title;
  favMovieDisplay.appendChild(newi); // span into h2

  }
  
getfavmovieItem();

///==============================================================

const makeActionList = async () => {
  const jsonGenreList = await getActionRated();
  console.log("Done getting list of top 10 Action Movies")

  const movieDisplayList = document.getElementById("topRatedAction") // get UL 

  const addMoviesToDom = (database) => {

    let moviesLiArray = database.map(movie => {
        const newLi = document.createElement("li"); // make li element for each movie
        const newSpan = document.createElement("span"); // make span
        newSpan.innerHTML = movie.title ;
        newLi.appendChild(newSpan); // span into UL
      return newLi;
    })
  
    moviesLiArray.forEach(movie => {
      movieDisplayList.appendChild(movie); // li in ul
    })
    
  }
  
  addMoviesToDom(jsonGenreList)
}
makeActionList();


///==============================================================

const makeOldList = async () => {
  const jsonGenreList = await getOldMovies();
  console.log("Done getting list top 10 from 1975")

  const movieDisplayList = document.getElementById("oldMovies") // get UL 

  const addMoviesToDom = (database) => {

    let moviesLiArray = database.map(movie => {
        const newLi = document.createElement("li"); // make li element for each movie
        const newSpan = document.createElement("span"); // make span
        newSpan.innerHTML = movie.title ;
        newLi.appendChild(newSpan); // span into UL
      return newLi;
    })
  
    moviesLiArray.forEach(movie => {
      movieDisplayList.appendChild(movie); // li in ul
    })
    
  }
  
  addMoviesToDom(jsonGenreList)
}
makeOldList();






