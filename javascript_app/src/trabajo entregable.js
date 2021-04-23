const Carro = {
	tamTanque: 150, 		
	kilometro_Litro: 0.5,  	
	radio_llanta: 25, 		
	color: 'negro',  		
	encendido: true,		
	combustible: 60,  	    
	metros_Llantas: 0,		
	aceleracion: 0,		    
	distancia_recorrida: 0,	
    	distancia_Radiollantas() {	
		const PI = 3.14;
		this.metros_Llantas= this.radio_llanta * 2 * PI;
		console.log(`distancia recorrida por un giro de la llanta: ${( this.metros_Llantas /100).toFixed(3)}`);
	},

	Llenar_Combustible (){   	
		let aux_combustible = Math.random() * 100;
		if(aux_combustible <= (this.tamTanque - this.combustible)){
			this.combustible += aux_combustible;
			console.log(`nivel combustible ${this.combustible} litros`);
		}
		else{
			console.log('excedido la capacidad del tanque');
		}
	},
	Encender(){				
		if(!this.encendido){
			if(this.combustible >= 2){ 	
				this.encendido = true;
				console.log('el vehículo encendido');
				this.Acelerar();
			}
		}
		else{
			console.log('el vehículo esta encendido');
		}
	},
	Acelerar(){		
		if(this.combustible > 0){
			this.aceleracion = Math.random() * 100 ;
			console.log(`la aceleración es de : ${this.aceleracion} kilometros`);
			this.distancia_recorrida += this.aceleracion;
			console.log(`distancia recorrida por el carro: ${this.distancia_recorrida} kilometros`);
			let consumido = this.aceleracion * this.kilometro_Litro
			this.combustible -= consumido;
			console.log(`${consumido } litros gastados`);
			console.log(`nivel del tanque ${this.combustible} litros`);
		}
		else{
			this.Apagar();
			console.log('combustible insuficiente');
		}
	},
	Apagar (){			
		if(this.encendido){
			this.encendido = false;
			console.log('el vehículo esta apagado');
		}
		else{
			console.log('el vehículo esta apagado');
		}
	}
}

Carro.distancia_Radiollantas();
Carro.Encender();
Carro.Apagar();
Carro.Acelerar();
Carro.Llenar_Combustible();
