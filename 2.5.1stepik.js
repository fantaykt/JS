//В этом задании в нашу функцию testDateTime передаются две строки вида "03 November 2017 04:17".
//Вам нужно превратить строки в даты, сравнить их. Для той, что больше получить день недели и вернуть его из функции.
//Название дня недели должно быть по-русски, с большой буквы, например: "Понедельник".
function testDateTime(a, b) {
    var x = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    var y = new Date(a)
    var z = new Date(b)
    if (y.getTime(a)>z.getTime(b)) { var nday = y.getDay(a)} else { nday = z.getDay(b)}
    return x[nday];
}
