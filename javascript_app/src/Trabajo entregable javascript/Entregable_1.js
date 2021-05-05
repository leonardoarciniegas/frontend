let num;

console.log('Digite un numero ');

process.stdin.on('data', (d) => {        
    num = d.toString().trim();        
    let num_alreves = '';

    for(let i=(num.length-1); i>=0; i--){   
        num_alreves += num[i];         
    }
    
    console.log(`Numero al reves: ${num_alreves}`);
    process.exit();
})