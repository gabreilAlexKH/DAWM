interface Person {
    ssn: string;
    firstName: string;
    lastName: string; 
    age: number;
    married: boolean;   
}

let interfazPropiedades = () => {

	//Defina la variable person de acuerdo con la interfaz Person

	/* Inicio */
	let person:Person;
    person = {
        ssn: "45785641",
        firstName: "Juan",
        lastName: "Mera",
        age: 35,
        married: false

    }
	/* Fin */

	return person;
}

console.log(interfazPropiedades())

export {interfazPropiedades}