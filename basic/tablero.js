let tablero = "";

for(let i = 0; i < 8; i++){
    for(let j = 0; j<8; j++){
        if((i+j) % 2 === 0){
            tablero += " ";
        }
        else{
            tablero += "#";
        }
    }
    tablero += "\n";
}

console.log(tablero);