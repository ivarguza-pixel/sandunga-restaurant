// ==========================================
// LAB JS-AV4 IIFEs y Espacios de Nombres
// ==========================================

// IIFE básico - se ejecuta inmediatamente
(function() {
  console.log("IIFE ejecutado inmediatamente");
  let mensaje = "Este mensaje es privado";
  console.log(mensaje);
})();

// La variable mensaje no existe fuera del IIFE
// console.log(mensaje); // esto daría error

// IIFE con parámetro
(function(nombre) {
  console.log("Bienvenido al sistema:", nombre);
})("Restaurant Sandunga");

// Espacio de nombres - evita conflictos entre scripts
let Sandunga = {};

Sandunga.menu = (function() {
  let platillos = ["Ceviche", "Aguachile", "Camarones"];
  
  return {
    listar: function() {
      return platillos;
    },
    agregar: function(platillo) {
      platillos.push(platillo);
      console.log("Agregado:", platillo);
    },
    total: function() {
      return platillos.length;
    }
  };
})();

Sandunga.reservaciones = (function() {
  let reservas = [];
  
  return {
    hacer: function(nombre, personas) {
      reservas.push({ nombre, personas });
      console.log(`Reserva para ${nombre} - ${personas} personas`);
    },
    listar: function() {
      return reservas;
    }
  };
})();

// Usar los espacios de nombres
console.log("Menú:", Sandunga.menu.listar());
Sandunga.menu.agregar("Chilorio");
console.log("Total platillos:", Sandunga.menu.total());

Sandunga.reservaciones.hacer("Juan García", 4);
Sandunga.reservaciones.hacer("María López", 2);
console.log("Reservas:", Sandunga.reservaciones.listar());