const movies = require('./movies.json');

/**
 * Complete with a brief definition of what this function should do
 * this function returns the first ten movies from array moviesgit
 * @returns {Array}
 */
function getFirstTenMovies(){
   return movies.slice(0, 9);
 
}

/**
 * Complete with a brief definition of what this function should do
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
}

function main(){
    const firstTenMovies = JSON.stringify(getFirstTenMovies());
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();