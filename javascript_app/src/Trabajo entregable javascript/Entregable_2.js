let num;
let suma = 0;

console.log('Digite un numero ');

process.stdin.on('data', (d) => {        
    num = d.toString().trim();        

    for(let i=0; i<num.length; i++){
        suma = suma + parseInt(num[i], 10);
    }
    
    console.log(`La suma es: ${suma}`);
    process.exit();
})