var laracha = 0 ;
var arteixo = 0 ;
var ordes = 0 ;
var carballo = 0;
var larachap = document.getElementById("larachap");
console.log(larachap);
var ordesp = document.getElementById("ordesp");
console.log(ordesp);
var arteixop = document.getElementById("arteixop");
console.log(arteixop);
var carballop = document.getElementById("carballop");
console.log(carballop);

function larachaPlus(){
	laracha = laracha + 1;
	larachap.innerHTML = laracha;
}

function larachaLess(){
	laracha = laracha - 1;
	larachap.innerHTML = laracha;
}

function ordesPlus(){
	ordes = ordes + 1;
	ordesp.innerHTML = ordes;
}

function ordesLess(){
	ordes = ordes - 1;
	ordesp.innerHTML = ordes;
}

function arteixoPlus(){
	arteixo = arteixo + 1;
	arteixop.innerHTML = arteixo;
}

function arteixoLess(){
	arteixo = arteixo - 1;
	arteixop.innerHTML = arteixo;
}

function carballoPlus(){
	carballo = carballo + 1;
	carballop.innerHTML = carballo;
}

function carballoLess(){
	carballo = carballo - 1;
	carballop.innerHTML = carballo;
}
