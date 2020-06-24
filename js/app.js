//a

var url = window.location.href;
var swLocation = '/meraki/serviceworker.js';


if ( navigator.serviceWorker ) {


    if ( url.includes('localhost') ) {
        swLocation = '/serviceworker.js';
    }


    navigator.serviceWorker.register( swLocation );
}



//--------------------------------------.------audio-mesiento--------------------------------------------------------------//

	
var audioBien = new Audio();
audioBien.src = "audio/tabla1mesiento/Bien.mp3";

var audioMal = new Audio();
audioMal.src = "audio/tabla1mesiento/Mal.mp3";

var audioTriste = new Audio();
audioTriste.src = "audio/tabla1mesiento/Triste.mp3";

var audioContento = new Audio();
audioContento.src = "audio/tabla1mesiento/Contento.mp3";

var audioEnfadado = new Audio();
audioEnfadado.src = "audio/tabla1mesiento/Enfadado.mp3";

var audioEnfermo = new Audio();
audioEnfermo.src = "audio/tabla1mesiento/Enfermo.mp3";

var audioCansado = new Audio();
audioCansado.src = "audio/tabla1mesiento/Cansado.mp3";

var audioAsustado = new Audio();
audioAsustado.src = "audio/tabla1mesiento/Asustado.mp3";




//------------------------------------audio-index (Tabla1)--------------------------------------------------//


var audioTematica = new Audio();
audioTematica.src = "audio/Tematica.mp3";
var audioHola = new Audio();
audioHola.src = "audio/tab1principal/Hola.mp3";
var audioAdios = new Audio();
audioAdios.src = "audio/tab1principal/Adios.mp3";


var audioSi = new Audio();
audioSi.src = "audio/tab1principal/si.mp3";

function comoEstas() {
	var audioComoe = new Audio();
		audioComoe.src = "audio/tab1principal/Comoe.mp3";
		audioComoe.play();

		setTimeout(function(){ 
			var myWindow = location.replace('me-siento.html','_self',"scrollbars=no");
		}, 1000);
}

var audioGracias = new Audio();
audioGracias.src = "audio/tab1principal/Gracias.mp3";

function irTabla1b() {
	var myWindow = location.replace('index.html',"scrollbars=no");
		
}

var audioNo = new Audio();
audioNo.src = "audio/tab1principal/No.mp3";

function meSiento() {
	var audioMesiento = new Audio();
		audioMesiento.src = "audio/tab1principal/Mesiento.mp3";
		audioMesiento.play();

		setTimeout(function(){ 
			var myWindow = location.replace('me-siento.html','_self',"scrollbars=no");
		}, 1000);
}

var audioSobremi = new Audio();
audioSobremi.src = "audio/tab1principal/Sobremi.mp3";

var audioTequiero = new Audio();
audioTequiero.src = "audio/tab1principal/Tequiero.mp3";

//function sobreMi() {
//	var audioSobremi = new Audio();
//		audioSobremi.src = "audio/tab1principal/Sobremi.mp3";
//		audioSobremi.play();

//		setTimeout(function(){ 
//			var myWindow = location.replace('sobre-mi.html','_self',"scrollbars=no");
//		}, 1000);
//}


//------------------------------------------audio-sobremi-.-----------------------------------------------------------------//
//var audioNombre = new Audio();
//audioNombre.src = "audio/tabla1Sobremi/Soyluis.mp3";

//var audioAnios = new Audio();
//audioAnios.src = "audio/tabla1Sobremi/canios.mp3";
  
//var audioTengo = new Audio();
//audioTengo.src = "audio/tabla1Sobremi/Tengo.mp3";

//var audioEstudio = new Audio();
//audioEstudio.src = "audio/tabla1Sobremi/Estudio.mp3";

//var audioGrado = new Audio();
//audioGrado.src = "audio/tabla1Sobremi/Voy.mp3";

//var audioNogusta = new Audio();
//audioNogusta.src = "audio/tabla1Sobremi/Nomegusta.mp3";

//var audioCumple = new Audio();
//audioCumple.src = "audio/tabla1Sobremi/Micumple.mp3";

//var audioMegusta = new Audio();
//audioMegusta.src = "audio/tabla1Sobremi/Megusta.mp3";


//var audioTequiero = new Audio();
//audioTequiero.src = "audio/tab1principal/Tequiero.mp3";


/////////////////////////////////////////////////////////////////////////////7
	/*Audio para tematica*/
	//function temasDiversos() {
	//	var audioTematica = new Audio();
	//		audioTematica.src = "audio/Tematica.mp3";
	//		audioTematica.play();

	//		setTimeout(function(){ 
	//			var myWindow = location.replace('temas-diversos.html','_self',"scrollbars=no");
	//		}, 1000);
	//}

	/*Funcion para regresar a la pagina principal con flecha a la izquierda*/
	function regresaTabla1() {
		var myWindow = location.replace('index.html','_self',"scrollbars=no");	
	}

	/*Funcion para regresar a la pagina principal con icono de casita*/
	function Inicio() {
			var myWindow = location.replace('index.html',"scrollbars=no");
	}

	//Flecha abajo en tematica

	function irflechaa() {
	var myWindow = location.replace('index.html',"scrollbars=no");
		
	}


