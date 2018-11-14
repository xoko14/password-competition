
function id(id){
	return document.getElementById(id);
}

var contenedor = id("contenedor");

var timer = false;


function establecerCuentaAtras(){

	clearInterval(timer);

	var tiempo = (0*60*60*1000) + (1*60*1000) + (0*1000) + 0;

	var destino = new Date().getTime() + tiempo;
	var alarm = new Audio('data/default.mp3');

	timer = setInterval(function(){

		var ahora = new Date().getTime();

		var diferencia = (destino - ahora);
		var minutos = (parseInt(diferencia/60000));

		var segundos = (parseInt(diferencia/1000) - minutos);

		var milisegundos = (diferencia - segundos);

		if(diferencia <= 0){

			contenedor.innerHTML = "60"; // Aqui puedes poner algo en plan "Fin de la cuenta atras :p"
			clearInterval(timer);
			alarm.play();

		}else{

			contenedor.innerHTML = segundos;
			id("elemento").style.width = parseInt(diferencia*100/60000) + "%";

		}

	}, 1);
}

//establecerCuentaAtras();
