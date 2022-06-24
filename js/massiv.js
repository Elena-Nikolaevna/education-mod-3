const friends = [
    { name: "Mango", online: false },
    { name: "Kivi", online: true },
    { name: "Poly", online: true },
    { name: "Ajax", online: false },
];

//friends[1].newrop = 555; //добавит свойство только одному обьекту (в данном случае киви)
console.table(friends);

// Перебираем пообьектно на каждой литерации мы получаем доступ к елементам

/* for(const friend of friends){
    console.log(friend); //если делать через точку получаем одно значение (friend.name)
    friend.newrop = 555 // Добавляем свойство со значением
};
console.table(friends); */

//=========== Ищем друга по имени (возвращает нашли или не нашли)
/* const findFriendByName = function(allFriends, name){
    
for(const friend of allFriends){
    //console.log(friend.name === name) //перебираем поименно и строго сравниваем с именем, которое ищем
    if(friend.name === name){
        return 'НАШЛИ!'
    } /// Если совпалает Будет возврат НАШЛи
}
return 'НЕ НАШЛИ :(' //Если не нашли
};

console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy')); */

//==========Из массива друзей получить все ИМЕНА друзей

/* const getAllNames = function (allFriends) {
    const names = []; // создаем пустой массив в который будем пушить перебранные строки
    for (const friend of allFriends) {
        names.push(friend.name);
    }
    return names;
};
console.log(getAllNames(friends)); */

//============= Получаем всех друзей, которые ОНЛАЙН
/* const getOnlineFriends = function (allFriends){
    const onlineFriends = [];
    
    for (const friend of allFriends) {
    //console.log(friend);
    if(friend.online){
        onlineFriends.push(friend) 
    }
    }
    return onlineFriends;
};
console.log(getOnlineFriends(friends)); */

//============= Получаем всех друзей, которые ОФФЛАЙН
/* const getOfflineFriends = function (allFriends) {
    const offlineFriends = [];

    for (const friend of allFriends) {
        //console.log(friend);
        if (!friend.online) {
            //Важно указано что если друг НЕ онлайн (!friend.online)
            offlineFriends.push(friend);
        }
    }
    return offlineFriends;
};
console.log(getOfflineFriends(friends)); */

/// Получить друзей и тех которіе онлайн и тех которіе офлайн

/* const getFriendsByOnlineStatus = function (allFriends) {
    const friendByStatus = {
        online: [],
        offline: [],
    };

    for (const friend of allFriends) {
        //console.log(friend);
        if (friend.online) {
            friendByStatus.online.push(friend);
            continue;
        };
        friendByStatus.offline.push(friend);
    };
    return friendByStatus;
};
console.log(getFriendsByOnlineStatus(friends)); */


