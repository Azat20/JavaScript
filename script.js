// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');

// const personalMovieDB = {
//     count:numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:{},
//     privat:false
// };


// const a = prompt('Один из последных просмотренных фильмов ?',''),
//       b = prompt('На сколько оцените его',''),
//       c = prompt('Один из последных просмотренных фильмов ?',''),
//       d = prompt('На сколько оцените его','');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


if ( 4 ==4){
    console.log('OK!');
} else {
    console.log('Error');
}

const num = 50;
if (num < 49){
    console.log('Error');
} else if (num > 100) {
    console.log('Mnogo');
} else {
    console.log('OK!');
}


(num === 50) ? console.log('OK!') : console.log('Error');
switch (num) {
    case 49:
        console.log('Neverno');
        break;
    case 100:
        console.log('Neverno');
        break
    case 51:
        console.log('V tochku');
        break;
    default:
        console.log('Ne etot raz');
        break;
}