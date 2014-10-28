
//intervalo tiempo cambio img slide, 5 segundos, se llama a la función "avanzaSlide()"
setInterval('avanzaSlide()',5000);
 
//array con las clases para las diferentes imagenes
var arrayImagenes = new Array(".img1",".img2",".img3");
 
//variable que nos permitirá saber qué imagen se está mostrando
var contador = 0;
 
//hace un efecto fadeIn para mostrar una imagen
function mostrar(img){
	$(img).ready(function(){				
  		$(arrayImagenes[contador]).fadeIn(1500);		
	});
}
 
//hace un efecto fadeOut para ocultar una imagen
function ocultar(img){
	$(img).ready(function(){				
  		$(arrayImagenes[contador]).fadeOut(1500);		
	});
}
 
//función principal
function avanzaSlide(){
        //se oculta la imagen actual
	ocultar(arrayImagenes[contador]);
        //aumentamos el contador en una unidad
	contador = (contador + 1) % 3;
        //mostramos la nueva imagen
	mostrar(arrayImagenes[contador]);
}

//HOME PAGE: Menú-Galería SERVICIOS

function mouseRollover(photo1) {
	var old = photo1.src;
	photo1.src = photo1.dataset.alt;
	photo1.dataset.alt = old;
}

      //Para resetear las visitas
      resetvisitas=function(){
      (localStorage['visitas']=0)
      }

//CONTADOR VISITAS POR USUARIO
visitas=function(id)
  {return document.getElementById(id);}
    if(localStorage){ //localStorage es una cookie local
      if(localStorage['visitas']==undefined){
        localStorage['visitas']=0;
        }
//Para resetear las visitas
      //resetvisitas()    
        
      var n=parseInt(localStorage['visitas']);localStorage['visitas']=1+n;
      var mensaje="Hasta ahora has visitado nuestra pagina " + n + " veces.";

      visitas('cuentavisitas').innerHTML=mensaje;
    }



