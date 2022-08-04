

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la tabla de multiplicar",
  })
  //Option ('l')
  //listar
  //tipo boolear
  //Opcional false en defecto

  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muesta la tabla en consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Exponente hasta dodne quieres la tabla",
  })


  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
