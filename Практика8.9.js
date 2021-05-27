function GetNumberEvenOdd(arr, array, count1, count2)
{
	for(let i = 0; i < arr.length; i++)
	{
		if(arr[i]%2==0 && arr[0] != null)
		{
			count1++;
		}
		else
			count2++;
		if(arr[i]==0)
			array.push(arr[i]);
	}
	if(arr[0] == null)
		alert("Массив пустой ");
	else if(count1 == 0)
		alert("Таких чисел нету ");
	else
	{
		alert(count1 + " - количесво четных элементов");
		alert(count2 + " - количесво нечетных элементов");
		alert(array.length + " - столько нулей в массиве arr")
	}
}
let arr = prompt("Введите значения через пробел").split(' ');
let array = [];
let count1 = 0;
let count2 = 0;
(GetNumberEvenOdd(arr, array, count1, count2));