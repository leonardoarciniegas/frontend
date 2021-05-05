let num;
let primo;

console.log('Digite un numero ');

process.stdin.on('data', (d) => {
    num = d.toString().trim();
    let aux = 0;

    for(let i=1; i<=parseInt(num); i++){
        if(parseInt(num)%i == 0){
            aux++;
        } 
        if(aux==2){
            primo = `${num} Es primo`;
        }
        else{
            primo = `${num} no es primo`;
        }
    }
    
    console.log(primo);
    process.exit();
})