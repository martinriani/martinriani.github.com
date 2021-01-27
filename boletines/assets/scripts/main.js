//console.log("Hola mundo desde archivo externo");

//DOM
// let tabla = document.querySelector(".tabla");

/*let links = document.querySelectorAll("a");
//console.log(links);


links.forEach(function(link){
  console.log(link);
});*/

/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
  td.addEventListener('click',function(){
    console.log(this);
  })
});
*/

//obtener los elementos de la clase .close
/*let links = document.querySelectorAll(".close");

//recorrerlos
links.forEach(function(link){
  //agregar el evento
  link.addEventListener('click',function(){
    console.log(this);
  })
});*/


/* quitar comportamiento por defecto de eventos*/
/*let links = document.querySelectorAll(".close");

//recorrerlos
links.forEach(function(link){
  //agregar el evento
  link.addEventListener("click",function(ev){
    ev.preventDefault();
    //o sino : return false;
  });
});*/

/*let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
  icono.classList.remove("fa-star");
});*/

let links = document.querySelectorAll(".close");

//recorrerlos
links.forEach(function(link){
  //agregar el evento
  link.addEventListener("click",function(ev){
    ev.preventDefault();
    let content = document.querySelector(".content");

    //quita las clases de animacion que ya tiene
    content.classList.remove("animate__fadeInDown");
    content.classList.remove("animate__animated");

    //agrega las clases para animar a su salida
    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");

    //redirige a la pagina de inicio
    setTimeout(function(){
      location.href = "/boletines";
    },700);

    /* repite la accion cada cierto tiempo
    setInterval(function(){
      //
    },600);*/

    return false;
  });
});
