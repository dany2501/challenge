const clean = (req, res) => {

    // Obtenemos el objeto de la petición.
    let data = req.body;
    // Lo convierto a String para validar que no venga vacío
    if (JSON.stringify(data) == "{}") {
        // Retorno un error, diciendo que el objeto es invalido
        return res.status(400).json({ code: 400, msg: "Objeto no válido" });
    }
    // En caso de ser válido, mandamos llamar la función que válida los atributos.
    validateNull(data);

    // Regresamos el código 200 y el nuevo objeto sin los nulos
    return res.status(200).json(data);


}


// Es una función recursiva, en caso de que el objeto contenga objetos dentro de él
// iterará dichos objetos para buscar nulos y elimarlos del objeto.
const validateNull = (data) => {
    // Comenzamos a iterar sobre las llaves del objeto
    for (var key in data) {
        // Si el atributo es un objeto lo iteramos.
        if (typeof (data[key]) == "object") {
            validateNull(data[key])
        }

        // Si el atributo es un nulo, lo eliminamos del arreglo.
        if (data[key] == null) {
            delete data[key]
        }
    }
}

module.exports = { clean }