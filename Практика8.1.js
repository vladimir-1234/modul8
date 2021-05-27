let params = parseInt(prompt("Задание 1. Введите число, чтобы проверить четно ли число или нет"));
if(isNaN(params) || params == "")
	alert("Упс, кажется, вы ошиблись!");
else if(typeof(+params) === "number")
{
	if(params%2==0)
	{
		alert("Число четно");
	}
	else
		alert("Число не четно");
}