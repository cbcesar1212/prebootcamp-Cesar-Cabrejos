document.getElementById("botonSaludo").addEventListener("click", function() {
  const nombre = document.getElementById("nombre").value;
  const mensaje = `Hola ${nombre}, Mucho gusto, soy César Cabrejos`;
  document.getElementById("mensaje").textContent = mensaje;
});