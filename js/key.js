function inicializar() {
	document.onkeydown = function () {
		switch (event.keyCode) {
			case 32 :
			    establecerCuentaAtras();
				imprimirEnPantallaLosResutados();
			break;
			case 81 :
				arteixoPlus();
			break;
			case 65 :
				arteixoLess();
			break;
			case 87 :
				ordesPlus();
			break;
			case 83 :
				ordesLess();
			break;
			case 69 :
				larachaPlus();
			break;
			case 68 :
				larachaLess();
			break;
			case 77 :
				//playRandomSong();
			break;
			case 78 :
				//stopSong();
			break;
			default :
				return true;
			break;
		}
		event.keyCode = 0;
		event.returnValue = false;
		event.cancelBubble = true;
		return false;
	}
	document.onhelp = function () { alert("F1"); return false; }
}
