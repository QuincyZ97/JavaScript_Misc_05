const API_KEY = "2582609f1e49ed4ba7cc8fc02ac953bd"

const getGenres = async() => {
    try {
        const apiUrl = "https://api.themoviedb.org/3/genre/movie/list"
        const res = await fetch(`${apiUrl}?api_key=${API_KEY}`)
        const jsonResponse = await res.json()
        return jsonResponse;
    } catch (error) {
        console.log(error)
    }
}

const getfavmovie = async() => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/find/tt0245429?api_key=2582609f1e49ed4ba7cc8fc02ac953bd&language=en-US&external_source=imdb_id`)
        const jsonResponseFav = await res.json()
        //console.log(jsonResponseFav.movie_results[0].title)// getmovie results FIRST array > title name
        return jsonResponseFav;
    } catch (error) {
        console.log(error)
    }
}

const getActionRated = async() => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2582609f1e49ed4ba7cc8fc02ac953bd&language=en-US&region=US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=false&page=1&with_genres=28&with_original_language=en
        `)
        const jsonResponseFav = await res.json()
        const twentyArray = jsonResponseFav.results
        const tenArray = twentyArray.slice(0, 10); // ONLY RETURN 10 ITEMS!
        return tenArray;
    } catch (error) {
        console.log(error)
    }
}


const getOldMovies = async() => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=2582609f1e49ed4ba7cc8fc02ac953bd&language=en-US&region=US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=false&page=1&year=1975&with_original_language=en`)
        const jsonResponseFav = await res.json()
        const twentyArray = jsonResponseFav.results
        const tenArray = twentyArray.slice(0, 10); // ONLY RETURN 10 ITEMS!
        return tenArray;
    } catch (error) {
        console.log(error)
    }
}


