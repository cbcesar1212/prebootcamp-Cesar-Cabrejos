document.getElementById("botonSaludo").addEventListener("click", function() {
  const nombre = document.getElementById("nombre").value;
  const mensaje = `Hola, ${nombre}`;
  document.getElementById("mensaje").textContent = mensaje;
});