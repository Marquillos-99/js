let celsiusAFaren = () => {
    let c = prompt("Por favor, grados celsius");
    let f = (c *1.8) + 32;
    console.log("La temperatura es" + f + "Farenheight");
}

celsiusAFaren();

const celsius = x => {
    console.log(((x*1.8)+32))
}

celsius(8);