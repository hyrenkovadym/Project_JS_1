const numberOfFilms = +prompt("Скільки фільмів ти вже подивився?" , "");

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

// let i = 0

// while ( i < 2){
//     const a = prompt("Останій переглянутий фільм?", "");
//     const b = +prompt("Оціни цей фільм?", "");

//     if( a != null && b != null && a != '' && b != '' && a.length < 10){
//         personalMovieDB.movie[a] = b;
//         console.log("done");
//     } else{
//         i--;
//         console.log("error");
//     };
//     i++;

// }

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

if( personalMovieDB.count < 10 ){
    alert("Просмотрено довольно мало фильмов");
}else if( personalMovieDB.count >= 10 &&  personalMovieDB.count < 30) {
    alert("Ви класичний спостерігач");
}else if ( personalMovieDB.count >= 30) {
    alert("Ви кіноман");
} else {
    alert("Error");
}

console.log(personalMovieDB);