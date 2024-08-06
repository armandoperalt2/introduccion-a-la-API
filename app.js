document.addEventListener('DOMContentLoaded', function(){
    //como obtengo la informacion de la api
    //usando fetch
   //const promesa = fetch('https://dragonball-api.com/api/characters')
   //console.log(promesa);
   fetch('https://dragonball-api.com/api/characters')
   .then(respuesta => respuesta.jsson())
   .then(data => console.log(data));

});
