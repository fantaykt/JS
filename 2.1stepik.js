//Дано натуральное число n. Напишите рекурсивную функцию, которая возвращает строку чисел от 1 до n, разделенных пробелом.
function my_function(n) {
    if (n<=0) return 0;
   return n = my_function(n - 1) + n + " "; 
    
}