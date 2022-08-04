const fs = require("fs");
const colors = require("colors")

const crearArchivo = async (base = 5, listar= false, hasta = 10) => {
  try {
   
  

    let salida = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} X ${i} = ${base * i}\n`;
    }

    if (listar){
      console.log("==========================".green);
      console.log(`       Tabla del ${base}`.red);
      console.log("==========================".green);
      console.log(salida.rainbow);
    }

    

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    console.log("Archivo creado con exito!");
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
