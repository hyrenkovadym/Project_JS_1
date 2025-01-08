let numberOfFilms;

function start( ){
    numberOfFilms = +prompt("Скільки фільмів ти вже подивився?" , "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Скільки фільмів ти вже подивився?" , "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const a = prompt("Останій переглянутий фільм?", "");
        const b = +prompt("Оціни цей фільм?", "");
    
        if( a != null && b != null && a != '' && b != '' && a.length < 10){
            personalMovieDB.movie[a] = b;
            console.log("done");
        } else{
            i--;
            console.log("error");
        };
    };
}
rememberMyFilms();


function detectPersonalLevel(){
    if( personalMovieDB.count < 10 ){
        alert("Просмотрено довольно мало фильмов");
    }else if( personalMovieDB.count >= 10 &&  personalMovieDB.count < 30) {
        alert("Ви класичний спостерігач");
    }else if ( personalMovieDB.count >= 30) {
        alert("Ви кіноман");
    } else {
        alert("Error");
    }
}
detectPersonalLevel();


function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB)
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        const c = prompt(`Ваш улюблений жанр під номером ${i}`, "");
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();


console.log(personalMovieDB);