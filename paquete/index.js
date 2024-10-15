console.log("Escribe tu nombre: ");
const stdin = process.openstdin();

stdin.addListener("data", (data) => {
  console.log("Tu nombre es: " + data.toString().trim());
});
