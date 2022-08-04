const { crearArchivo } = require("./helpers/multiplicar");

const argv = require("./config/yargs");

const colors = require("colors");

//Imprimir la tabla del 5 en la consola
/* 
const multiplica = (a)=>{
    for (let i = 1; i<=10;i++){
        multiplicacion = a*i
        console.log(`${a} X ${i} = ${multiplicacion}`);
    }
};


console.log(multiplica(5)); */

console.clear();

//Uso de yargs
//console.log(process.argv);

/* const [ , ,arg3 = 'base = 5' ] = process.argv;
const[ , base = 5]= arg3.split('=');
 */

//const base =5 ;

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
