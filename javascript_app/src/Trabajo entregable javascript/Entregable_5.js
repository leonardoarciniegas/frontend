let num;
let mayor = 0;

console.log('Digite un numero ');

process.stdin.on('data', (d) => {        
    num = d.toString().trim();

    for(let i=0; i<num.length; i++){
        if(mayor<num[i]){
            mayor = num[i];
        }
    }
    
    console.log(`El numero mayor es: ${mayor}`);
    process.exit();
})