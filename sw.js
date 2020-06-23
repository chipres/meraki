
importScripts('js/sw-utils.js');



const STATIC_CACHE    = 'static-v1';
const DYNAMIC_CACHE   = 'dynamic-v1';
const INMUTABLE_CACHE = 'inmutable-v1';


const APP_SHELL = [
   // '/',
    'index.html',
    'css/estilo.css',
    'img/favicon.ico',
    'me-siento.html',
    'js/app.js',
    'img/imagenestabla1/Adios.jpg',
    'img/imagenestabla1/Como-estas.jpg',
    'img/imagenestabla1/Gracias.jpg',
    'img/imagenestabla1/Hola.jpg',
    'img/imagenestabla1/Me-siento.jpg',
    'img/imagenestabla1/No.jpg',
    'img/imagenestabla1/Si.jpg',
    'img/imagenestabla1/Sobre-mi.jpg',
    'img/imagenestabla1/Te-quiero.jpg',
    'img/tabla1Mesiento/Asustada.png',
    'img/tabla1Mesiento/Bien.png',
    'img/tabla1Mesiento/Cansada.png',
    'img/tabla1Mesiento/Contenta.png',
    'img/tabla1Mesiento/Enfadada.png',
    'img/tabla1Mesiento/Enferma.png',
    'img/tabla1Mesiento/Mal.png',
    'img/tabla1Mesiento/Triste.png',

    'img/temas-diversos.jpg',
    'img/Flecha-gris-arriba-inhabilitada.jpg',
    'img/Flecha-gris-abajo-off.jpg',
    'img/Flecha-naranja-abajo.jpg',
    'img/Flecha-naranja-izquierda.jpg',


    'audio/tab1principal/Comoe.mp3',
    'audio/tab1principal/Gracias.mp3',
    'audio/tab1principal/Hola.mp3',
    'audio/tab1principal/Adios.mp3',
    'audio/tab1principal/Mesiento.mp3',
    'audio/tab1principal/No.mp3',
    'audio/tab1principal/Si.mp3',
    'audio/tab1principal/Sobremi.mp3',
    'audio/tab1principal/Tequiero.mp3',
    'audio/Tematica.mp3',

  



    'js/sw-utils.js'



];

const APP_SHELL_INMUTABLE = [

    'js/libs/jquery.js'
];


//Proceso de instalacion

self.addEventListener('install', e => {


    const cacheStatic = caches.open( STATIC_CACHE ).then(cache => 
        cache.addAll( APP_SHELL ));

    const cacheInmutable = caches.open( INMUTABLE_CACHE ).then(cache => 
        cache.addAll( APP_SHELL_INMUTABLE ));



    e.waitUntil( Promise.all([ cacheStatic, cacheInmutable ])  );

});


//Proceso para borrar caches viejos

self.addEventListener('activate', e => {

    const respuesta = caches.keys().then( keys => {

        keys.forEach( key => {

            if (  key !== STATIC_CACHE && key.includes('static') ) {
                return caches.delete(key);
            }

            if (  key !== DYNAMIC_CACHE && key.includes('dynamic') ) {
                return caches.delete(key);
            }

        });

    });

    e.waitUntil( respuesta );

});

// cache con Network Fallback
self.addEventListener('fetch', e =>{

    const respuesta = caches.match( e.request ).then(res => {
        if ( res ){
            return res;
        }else{
            return fetch( e.request ).then(newRes => {
                return actualizaCacheDinamico( DYNAMIC_CACHE, e.request, newRes );
            });

        }
        

    });

    e.respondWith(respuesta);

});





