///=============Деструктуризация, распаковка ОБЬЕКТОВ

/* const playList = {
    name: "Мой супер плейлист",
    rating: 5,
    tracks: ["трек-1", "трек-2", "трек-3"],
    trackCount: 3,
};

//
//const { rating, tracks, name, trackCount } = playList; // Если {} скобки слева от обьекта это ДЕСТРУКТУРИЗАЦИЯ распаковка
// Эта штука создает локальную переменную и можна вывести значение в консоль
//console.log(rating);
//console.log(tracks);
//console.log(name);
//console.log(trackCount);
//== если в обьекте нет переменной с запрашиваемым именем то: autor = 555
const { 
    rating, 
    tracks, 
    name, 
    trackCount: namberOfTrex, //Усли нужно переназвать переменную
    autor = 555 
} = playList;
//console.log(autor)// выводится значение после = (дефолтное значение) */

//===========Глубокая деструктуризация
/* const profile = {
    name: "Jacques Gluke",
    tag: "jgluke",
    location: "Ocho Rios, Jamaica",
    avatar: "https://s3.amazone",
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};
const { 
    name, 
    tag, 
    location, 
    avatar, 
    stats: {followers, views, likes} //Глубокая деструктуризация
} = profile;
//const { followers, views, likes } = stats;
console.log(name, tag, location, avatar, followers, views, likes);
 */
//============Деструктуризация МАССИВА

/* const rgb = [255, 100, 80];

const [red, green, blue] = rgb; 
//если нужно пропустить свойство то ставис пропуск и запятую [red, , blue]
//console.log(red, green, blue);

const autors = {
    kivi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,
};
//Нужно узнать у кого самфй высокий рейтинг
const entris = Object.entries(autors); 
//Метод Object.entries(obj) возвращает массив записей, каждым элементом которого будет еще один массив из 2-х элементов: имени свойства и значения этого свойства из объекта obj.
for (const [name, rating] of entris){
    console.log(name, rating)
} */
//===================================Операция rest (сбор)
//Бывают ситуации, когда из обьекта нужно вытянуть только некоторые свойства, а остальные собрать в другой архив

/* const profile = {
    name: "Jacques Gluke",
    tag: "jgluke",
    location: "Ocho Rios, Jamaica",
    avatar: "https://s3.amazone",
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};
const { name, tag, location, ...restProps } = profile;
console.log(name, tag, location);
console.log(restProps); */

// Паттерн обьект настроек

/* const showProfileInfo = function (userProfile) {
    const {
        name,
        tag,
        location,
        avatar,
        stats: { followers, views, likes },
    } = userProfile;
    console.log(name, tag, location, avatar, followers, views, likes);
}; // Деструктуризация
const profile = {
    name: "Jacques Gluke",
    tag: "jgluke",
    location: "Ocho Rios, Jamaica",
    avatar: "https://s3.amazone",
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};

showProfileInfo(profile); */
