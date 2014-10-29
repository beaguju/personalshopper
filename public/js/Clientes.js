var botonEnviar = document.getElementById('enviar'); //es el id del botón enviar
var meterPEnDiv = document.getElementById('bloqueDeComentario'); //donde va a meterse
//Lo que quiero es que al hacer click en el botón enviar con id enviar, haga lo siguiente:
botonEnviar.onclick = function (){
	//Cogemos el valor del id resumen
	var contenidoResumen = document.getElementById('resume').value;
	//El valor del id resumen, lo seleccionamos en un text node
	var textoResumen = document.createTextNode(contenidoResumen);
	//Creamos un elemento p
	var miResumen = document.createElement('p');
	//Metemos textoResumen en nuestra p
	miResumen.appendChild(textoResumen);
	meterPEnDiv.appendChild(miResumen);
	

	//Cogemos el valor del id comentario
	var contenidoComentario = document.getElementById('comentario').value;
	//El valor del id comentario, lo seleccionamos en un text node
	var textoComentario = document.createTextNode(contenidoComentario);
	//Creamos un elemento p
	var miComentario = document.createElement('p');
	//Metemos textoComentario en nuestra p
	miComentario.appendChild(textoComentario);
	meterPEnDiv.appendChild(miComentario);


	//Cogemos el valor del id nombre
	var contenidoNombre = document.getElementById('nombre').value;
	//El valor del id comentario, lo seleccionamos en un text node
	var textoNombre = document.createTextNode(contenidoNombre);
	//Creamos un elemento p
	var miNombre = document.createElement('p');
	//Metemos textoComentario en nuestra p
	miNombre.appendChild(textoNombre);
	meterPEnDiv.appendChild(miNombre);
};
