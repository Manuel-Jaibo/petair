function cotizar() {
  var enviarDatos = document.getElementById('env');
  enviarDatos.style.display = "block";

// Configuración para Tipo  de Mascota
var Animal = document.getElementById("miAnimal").value;
  switch (Animal) {
    case "perro":
      console.log("elegiste perro y cuesta:");
      var Animal = parseFloat("7000");
      console.log(Animal);
      break;

    case "gato":
      console.log("elegiste gato");
      var Animal = parseFloat("375.97");
      console.log(Animal);
      break;

    case "rinoceronte":
      console.log("elegiste rinoceronte");
      var Animal = parseFloat("87506");
      console.log(Animal);
      break;

    case "ballena sanguinaria":
      console.log("elegiste ballena sanguinaria");
      var Animal = parseFloat("87506");
      console.log(Animal);
      break;
  }

// Configuración para Tamaño de Mascota
var tamanoAnimal = document.getElementById("miTamano").value;
  switch (tamanoAnimal) {
    case "menor a poodle":
      console.log("menor a poodle");
      var tamanoAnimal = parseFloat("100000");
      console.log(tamanoAnimal);
      break;

    case "entre poodle y labrador":
      console.log("entre poodle y labrador");
      var tamanoAnimal = parseFloat("83664");
      console.log(tamanoAnimal);
      break;

    case "mayor a labrador":
      console.log("mayor a labrador");
      var tamanoAnimal = parseFloat("2647594");
      console.log(tamanoAnimal);
      break;
  }

// Configuración para Ruta
var ruta = document.getElementById("miRuta").value;
  switch (ruta) {
    case "cdmx-jalisco":
      console.log("cdmx-jalisco");
      var ruta = parseFloat("705454");
      console.log(ruta);
      break;

    case "jalisco-cdmx":
      console.log("jalisco-cdmx");
      var ruta = parseFloat("23526");
      console.log(ruta);
      break;

    case "cdmx-LA":
      console.log("cdmx-LA");
      var ruta = parseFloat("34354");
      console.log(ruta);
      break;

    case "cdmx-madrid":
      console.log("cdmx-madrid");
      var ruta = parseFloat("31");
      console.log(ruta);
      break;
  }

  // Suma Final
  var sumaFinal = Animal + tamanoAnimal + ruta;
  console.log("Total: $ " + sumaFinal);
  document.getElementById("suma").innerHTML = "$ " + sumaFinal;
}
