let count = 0; 
function getPrimeNumber(variable)
{
	if(variable<=1000)
	{
		for(var i=0; i<=variable; i++)
		{
			if(variable%i==0)
			{
				count++;
			}
		}
		if(count>=3 || variable == 2 || variable == 0)
			return "Число не простое";
		else
			return "Число простое"
	}
	else
		return "Данные не верны";
}
let variable = prompt("Введите значение <= 1000");
alert(getPrimeNumber(variable));