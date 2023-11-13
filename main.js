const juegos = [
  {
    nombre: "Carcassone",
    descripcion:
      "Un juego de colocación de fichas para 2 a 5 jugadores de 7 años en adelante",
    precio: 15000,
    stock: 20,
  },
  {
    nombre: "Kingdom Builder",
    descripcion:
      "Un juego de Donald X. Vaccarino para 2-4 personas a partir de 8 años",
    precio: 20000,
    stock: 10,
  },
  {
    nombre: "Love Letter",
    descripcion:
      "Conquista el corazón de la princesa en este juego de Seiji Kanai para 2-4 personas",
    precio: 7000,
    stock: 15,
  },
  {
    nombre: "The mind",
    descripcion:
      "Unamos nuestras mentes en este juego de cartas de Wolfgang Warsch para 2 a 4 jugadores",
    precio: 8000,
    stock: 15,
  },
];

const productos = prompt("Ingrese el producto que desea comprar: ");
alert("Usted desea llevar el juego " + productos);
