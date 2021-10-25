

var numerosUsados = [];
var palabrasSelecionadas = [];

var words = document.getElementById("words");
console.log(words);


function obtenerNumeroAleatorioEntre(minimo, maximo){
	return parseInt(Math.random() * (maximo - minimo) + minimo);
}


function obtenerPalabrasAleatorias(){
	
	numerosUsados = [];
	palabrasSelecionadas = [];
	
	while(palabrasSelecionadas.length < 5){
		
		this.numeroActual = obtenerNumeroAleatorioEntre(0, palabras.length); // Del cero al 9 hay 10 numeros
		
		for(var n in numerosUsados){ // Repasar todos los numeros que ya se hayan pillado
			
			if(this.numeroActual == numerosUsados[n]){
				this.numeroActual = -1;
			}
			
		}
		
		if(this.numeroActual >= 0){
			
			palabrasSelecionadas.push(palabras[this.numeroActual]);
			numerosUsados.push(this.numeroActual);
			
		}
		
	}
	
	return palabrasSelecionadas;
	
}

function imprimirEnPantallaLosResutados(){
	
	words.innerHTML = obtenerPalabrasAleatorias().join(", ");
	
}