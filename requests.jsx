const API_KEY = "587448c3afcfbe827e05590b7df147b7";
const requests = {
    fetchTrendingNow: `/trending/all/week?api_key=${API_KEY}&Language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRatedMovies:`/discover/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=109`,

};
export default requests;
//  <Row title="Top Rated"    fetchUrl={requests.fetchTopRatedMovies}/>
//requests.fetchNetflixOriganals
//fetchNetflixOriginals
//fetchDocumentaries
