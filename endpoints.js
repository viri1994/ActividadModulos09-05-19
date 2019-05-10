const express=require('express');
const services = require('./services');

exports.routes = (app) =>{


	app.get('/',(request, response)=> {
	response.send ('hola viri');
});

app.get('/usuario',(request, response)=> {
	const usuario={
		name:'Viridiana',
		edad:24
	}
	response.send (usuario);
});

app.get('/usuarios',(request, response)=> {
	const name = request.query.name;
	const age = request.query.age;
	const ageName = age + ' ' + name;
	const color = request.query.color;
	response.send(ageName);

});

app.get('/numeros',(request, response)=> {
	const num1 = request.query.num1;
	const num2 = request.query.num2;
	const resultado =parseInt(num1)+ parseInt(num2);
	response.send('Suma = '+ resultado);

});



app.delete('/borrar',(request, response)=> {
	const id = request.query.id;
	//aqui es donde se borra el recurso
	response.send('se borro' + id);

});


app.get('/json',(request, response)=> { //obteniendo url a Json
	const tienda = request.query.name;
	const tel=request.query.telefono;
	const obj={//estamos creando un objeto y siempre van con {}
		name:tienda,
		telefono:tel
	}
	response.json(obj);//mandamos a llamar a nuestro objeto
});


app.get('/correo',(request, response)=> { 
	const email = request.query.correo;
	response.send(email + "@gmail.com");
});


app.get('/Edad',(request, response)=> { 
	const y = request.query.year;
	const resultado=2019-y;
	response.send( "Tu edad es:" + resultado );
});

app.post('/datos',(request, response)=>{
	const postData=request.body;
	services.addId(postData);
	response.json(postData);
});
app.get('/html',(request, response)=> {
	response.render('form');
});

app.post('/form',(request, response)=> {
	const data = request.body;
	response.send(data);
});

}