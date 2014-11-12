function mostrar(){
	var yourName = document.getElementById("nombre").value;
	//var seleccionar = document.getElementById('checkbox1').value;
	var bloque=document.getElementById('bubble2');
	bloque.innerHTML = "Hola " + yourName + " ¿En qué puedo ayudarte?" + bloque.innerHTML; //+ seleccionar;
	document.getElementById('bubble2').style.display = 'block';
	}

function showContent1(){
	document.getElementById('bubble3').style.display = 'none';
	document.getElementById('bubble4').style.display = 'none';
	document.getElementById('bubble5').style.display = 'none';

	if (document.getElementById('checkbox1').checked)
	{
		//var evento=document.getElementById('bubble3');

		var bloque=document.getElementById('bubble3');
		bloque.innerHTML = "¿Qué tipo de evento?" + bloque.innerHTML;
		document.getElementById('bubble3').style.display = 'block';	
	}
	else if (document.getElementById('checkbox2').checked)
	{
		var bloque=document.getElementById('bubble4');
		bloque.innerHTML = "¿Qué quieres renovar?" + bloque.innerHTML;
		document.getElementById('bubble4').style.display = 'block';	
	}
	else if (document.getElementById('checkbox3').checked)
	{
		var bloque=document.getElementById('bubble5');
		bloque.innerHTML = "¿Para quién?" + bloque.innerHTML;
		document.getElementById('bubble5').style.display = 'block';	
	}
	else {
            alert ('Debes seleccionar una opción');
        }
}


