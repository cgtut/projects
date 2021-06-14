
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию  в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

'use strict';


const personalMovieDB = {

    count : 0,
    movies : {},
    actors: {},
    genres: [],
    privat: false,
     start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
    
        while (personalMovieDB.count =='' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
        }
    },

    
    rememberMyFilms:function() {

        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?',''),
                b = prompt('На сколько оцените его?','');
            
        
                if (a != null && b !=null && a !='' && b !='' && a.length<50) {
                    personalMovieDB.movies[a] = b;
                    console.log('done');
                }else{
                    console.log('error');
                    i--;
                }
            
        }
        
    },

    
    detectPersonalLevel:function() {

        if (personalMovieDB.count<10) {
        console.log('просмотрено мало фильмов ');

    } else if (personalMovieDB.count>=10 && personalMovieDB.count<30) {
        console.log('вы класический зритель ');
        
    } else if (personalMovieDB.count>=30) {
        console.log('Вы киноман ');

    } else{
        console.log('произошла ошибка ');
    }

    },

     showMyDB:function(hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
        
    },

    toggleVisibleMyDB:function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat=false;
        }else{
            personalMovieDB.privat=true;
        }
        
    },

     writeYourGenres:function() {
        for (let i = 1; i <2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            
            // if (genre ==='' || genre == null) {
            //     console.log('Вы ввели некоректные данные или не ввели вовсе');
            //     i--;
            // } else { 
            //     personalMovieDB.genres[i-1]=genre;
            // }


            // personalMovieDB.genres[i-1]=genre;
            
            let genres = prompt(`ВВедите Ваш любимый жанр через запятую`).toLocaleLowerCase();

            if (genres ==='' || genres == null) {
                    console.log('Вы ввели некоректные данные или не ввели вовсе');
                    i--;
                } else { 
                    personalMovieDB.genres=genres.split(', ');

                    personalMovieDB.genres.sort();
                }





        }

        personalMovieDB.genres.forEach((item,i)=>{

            console.log(`Любимый жанр ${i+1} - это ${item}`);


        });
    }


};

 