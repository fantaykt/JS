//В этом задании вам нужно вычислить сумму всех четных чисел, встречающихся в ряду от 1 до числа (включительно), передаваемого в нашу функцию (переменная "а").
function testWhile(a) {
    var x=0;
    var y = 0;
    while ( y<=a ) { if (y%2==0) {x=x+y; y++} else y++;}
    return x;
}