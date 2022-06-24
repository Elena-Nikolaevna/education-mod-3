///

/* const playlist = {
    name: 'Мой супер плей лист',
    rating: 5,
    tracks: ['трек-1','трек-2','трек-3'],
    trackCount: 3,
    getName () {
        console.log('Ага это функция getName :)'); //Это обычное свойство, в котором лежит функция
    }, // это МЕТОД ОБЬЕКТА, для работы со свойствами
};
//console.log(playlist)
//playlist.getName() // вызов функции */

///============== Изменение свойств
const playlist = {
    name: 'Мой супер плей лист',
    rating: 5,
    tracks: ['трек-1','трек-2','трек-3'],    
    trackCount: 3,
    //Изменение имени
    changeName(newName) {
        this.name = newName 
    },
    // Добавление трека
    addTrack(track){
        this.tracks.push(track)
    },
    // Изменяем рейтинг
    updateRating(newRating){
        this.rating = newRating
    },
    // Возврат количества треков динамическое
    getTtackCount(){
        return this.tracks.length;
    },
};

console.log(playlist.getTtackCount());// показывает количество треков после каждого добавления

playlist.changeName(`Новое имя!`);
playlist.addTrack(`Новый трек!`);
playlist.updateRating(4);

console.log(playlist);
console.log(playlist.getTtackCount());// показывает количество треков после каждого добавления