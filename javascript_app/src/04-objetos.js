console.log('+-------------------objetos-------------------+');

const persona = {
    nombre: 'Leonardo',
    apellidoPaterno: 'Arciniegas',
    apellidoMaterno: 'Morales',
    fechaNacimineto: '1981-12-24',
    direccion: {
        viaPrincipal: 'Calle',
        numeroVia: '23A',
        numerovia: 'carrera',
        placa: '26-34',
        barrio: 'Cabañas del rio',
        locacion: 'sur Este',
        comuna: '1'
    }

};

console.table(persona);

let otraPersona01 = {...persona}

otraPersona01.nombre = 'Carlos'
otraPersona01.apellidoMaterno = 'lopez'
otraPersona01.fechaNacimiento = '1985-08-14'

console.log('+-----------------------+');
console.table(otraPersona01);

console.log('+-------------------objetos Dinamicos---------------------+');

const personaDinamica = {
    nombre: 'Leonardo',
    apellidoPaterno: 'Arciniegas',
    apellidoMaterno: 'Morales',
    fechaNacimineto: '1981-12-24',
    direccion: {
        viaPrincipal: 'Calle',
        numeroVia: '23A',
        numerovia: 'carrera',
        placa: '26-34',
        barrio: 'Cabañas del rio',
        locacion: 'sur Este',
        comuna: '1'
    },
    fxNombreCompleto(){
        console.log(`Mi nombre es ${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`);
    },
    fxTabularAtributos(){
        console.table(this);
    }
};

///let obj = objet.create(personaDinamica)
let obj = {...personaDinamica};

obj.nombre = 'ADRIANA'
obj.apellidoPaterno = 'LOPEZ';
obj.fxNombreCompleto();
obj.fxTabularAtributos();

console.table(obj);

console.log('+------------------------FIN PROGRAMA---------------------+');
