fetch("_mosaico.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    // Buscar el div donde se va a insertar
    document.querySelector("#mosaic-insert").innerHTML = data;

    // Identifica si es la pagina de home o una patente por medio de una clase para aplicar otros estilos
    if (document.querySelector("#mosaic-insert").classList.contains("add_general_class")) {
      document.querySelector(".mosaic").classList.add("mosaic-general");
    }

    // Identificar por medio de una id la patente actual para aplicarle un nuevo estilo
    tiles = document.querySelectorAll(".mosaic .shadow");
    for (let i = 0; i < tiles.length; i++) {
      if (document.querySelector("#mosaic-insert").getAttribute("patent") == tiles[i].getAttribute("id"))
      {
        tiles[i].classList.add("active")
      };
    };
  });


  // Insertar el link a la store
document.querySelector(".store a").setAttribute("target", "_blank");
// document.querySelector(".store a").setAttribute("href", "app.apk");

const links = document.querySelectorAll(".store a");
console.log(links[0])

for (let i = 0; i < links.length; i++) {
  links[i].setAttribute("target", "_blank");
}
links[1].setAttribute("href", "https://play.google.com/store/apps/details?id=com.UniversidaddeMedellin.PatentesUdeM");
links[0].remove()


