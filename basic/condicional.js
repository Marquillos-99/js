let i = 0;
while (i <= 4) {
  edad = prompt("Cual es tu edad?");
  if (edad <= 2) {
    console.log("Eres un bebe");
  } else if (3 <= edad && edad <= 11) {
    console.log("Eres un niño");
  } else if (11 <= edad && edad <= 17) {
    console.log("Eres un adolescente");
  } else {
    console.log("Eres un adulto");
  }
  i++;
}
