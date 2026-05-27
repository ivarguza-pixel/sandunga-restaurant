// ==========================================
// LAB JS-6 JavaScript aplicado al sitio
// ==========================================

document.addEventListener("DOMContentLoaded", function() {

  // 1. Mostrar hora actual en el footer
  let footer = document.querySelector("footer p");
  let ahora = new Date();
  let hora = ahora.getHours();
  let minutos = ahora.getMinutes();
  let horaTexto = `${hora}:${minutos < 10 ? "0" + minutos : minutos}`;
  footer.textContent += ` | Hora actual: ${horaTexto}`;

  // 2. Verificar si el restaurant está abierto
  let estaAbierto = (hora >= 13 && hora <= 22);
  
  let aviso = document.createElement("div");
  aviso.style.textAlign = "center";
  aviso.style.padding = "10px";
  aviso.style.fontWeight = "bold";
  
  if (estaAbierto) {
    aviso.textContent = "✅ Estamos abiertos ahora";
    aviso.style.backgroundColor = "#28a745";
    aviso.style.color = "white";
  } else {
    aviso.textContent = "❌ Estamos cerrados. Horario: 1pm - 10pm";
    aviso.style.backgroundColor = "#dc3545";
    aviso.style.color = "white";
  }
  
  document.querySelector("header").after(aviso);

  // 3. Efecto hover en tarjetas
  let tarjetas = document.querySelectorAll(".card");
  tarjetas.forEach(function(tarjeta) {
    tarjeta.addEventListener("mouseenter", function() {
      this.style.transform = "scale(1.03)";
      this.style.transition = "transform 0.3s ease";
    });
    tarjeta.addEventListener("mouseleave", function() {
      this.style.transform = "scale(1)";
    });
  });

  console.log("Script cargado. Hora:", horaTexto, "| Abierto:", estaAbierto);
});