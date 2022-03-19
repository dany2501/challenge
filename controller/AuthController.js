const Error = require('../dto/Error');
const Response = require('../dto/AuthRS');
const { parseAuth } = require('../util/util')


const user = "test";
const psw = "123456"

const auth = (req, res, next) => {
    const [username, password] = parseAuth(req);

    // Creamos un objeto de respuesta para dar retroalimentación.
    let response = new Response(true, null)
    // Obtenemos la url del cuerpo de la petición.

    // Válidamos que las credenciales del usuario sean correctas
    if (username != user || password != psw) {
        response.success = false
        response.error = new Error(401, "Credenciales inválidas")
        // Retornamos el objeto de respuesta con el código 401 y el motivo del error.
        return res.status(401).json(response)
    }

    next();

}

module.exports = {
    auth
};