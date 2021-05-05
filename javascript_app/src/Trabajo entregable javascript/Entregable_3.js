let num;
let inicio = 0;
let fin
let mitad;

console.log('Digite un numero ');

process.stdin.on('data', (d) => {       
    num = d.toString().trim();                                 
    fin = num.length - 1;           
    mitad = parseInt(fin/2);  

    while(num[inicio] == num[fin]){   
        if(mitad == inicio){
             console.log("El numero es capicúa")
             break
        }
        fin--;
        inicio++;
    }
    if(mitad != inicio)
    console.log("el numero no es capicúa")

    process.exit();
})