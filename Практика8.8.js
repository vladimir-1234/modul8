let map = new Map([ 
	["car1","Wolkswagen"],
	["car2","Mersedes"],
	["car3","Cadillac"]
])
for(let name of map.keys())
alert(`ключ - ${name},   значения - ${map.get(name)}`);