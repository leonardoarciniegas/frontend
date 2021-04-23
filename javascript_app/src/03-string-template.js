console.log('+-------------------string template-------------------+');

const apellido = 'Arciniegas';
let nombre = 'Miguel Leonardo';

let variableNum = 11;

console.log('Señor '+apellido+' su multiplicacion es: '+(variableNum * 7));

let stringtemplate = `STRING TEMPLATE:
    Señor ${apellido}
    su multiplicacion es: ${ variableNum * 7 }`;

console.log(stringtemplate);

console.log(`llamado a una funcion desde String Template ==>> ${fx_randomico('XYZ')}`);

function fx_randomico(parmString) {
    return `Numero Random ${Math.random() * 100} Parametro >>>> ${parmString}`;
}
