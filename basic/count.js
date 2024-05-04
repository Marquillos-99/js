for(let numero = 1; numero <=100; numero++){
    let output = "";
    if(n % 3 == 0) output += "Fizz";
    if(n % 5 == 0) output += "Buzz";
    console.log(output || numero);
  }

  