fetch("_mosaico.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("#mosaic-insert").innerHTML = data;
    if (document.querySelector("#mosaic-insert").classList.contains("add_general_class")) {
      document.querySelector(".mosaic").classList.add("mosaic-general");
    }
  });