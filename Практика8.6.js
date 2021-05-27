let arr = prompt("Задание 6. Введите любые числа через пробел. Проверим, все ли элементы, которые вы ввели, одинаковые.").split(' ');
let flag = false;
let i = 0; 
while(arr.length-1 > i)
{
	if(arr[i+1] == arr[i])
		flag = true;
	else
	{
		flag = false;
		break;
	}
	i++;
}
alert(flag);