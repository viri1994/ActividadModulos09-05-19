exports.addId = (obj) => {
	var i = 0;
	obj.forEach(element => {//funcion que solo los arrays tienen (foreach) 
							//hace la misma funcion de un for
		element.id = ++i;

	});

//obj.id = ++i;
return obj;
}