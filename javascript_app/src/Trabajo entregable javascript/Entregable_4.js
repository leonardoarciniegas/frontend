let preguntas = ['Digite un numero: ', 'digito a encontrar: '];
let numeros = [];
let resultado;

const Preguntas = (i)  => {
    console.log(preguntas[i]);
}

process.stdin.on('data', (d) => {        
    numeros.push(d.toString().trim())    
    if(numeros.length < preguntas.length){
        Preguntas(numeros.length)
    }
    else {
        buscar(numeros[0], numeros[1]);
        process.exit();
    }
})

const buscar = (num, b) => {
    resultado = num.indexOf(b)              
    if(resultado != -1){
        console.log(`El digito se encontró`);
    }
    else console.log('No encontrado');
}

Preguntas(0);