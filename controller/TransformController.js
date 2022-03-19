const validUrl = require('valid-url');
const Response = require('../dto/TransformRS');
const Error = require('../dto/Error')
const transform = (req, res) => {

    let imageURL = req.body.link;
    // Creamos un objeto de respuesta para dar retroalimentación.
    let response = new Response(true, null, null);
    // Válidamos que sea una cadena y además corresponda a una url
    if (typeof (imageURL) == "string" && validUrl.isUri(imageURL)) {
        // Convirtiendo la url de ascii a base64
        let urlBase64 = Buffer.from(imageURL, 'ascii').toString('base64');
        // Asignamos la cadena a la respuesta.
        response.base64 = urlBase64;
        // Retornamos el objeto de respuesta con el código 201
        return res.status(201).json(response);

    } else {
        // Si no se envía la url de la imagen, mostamos un error.
        response.success = false
        response.error = new Error(401, "Url inválida")
        return res.status(401).json(response);
    }
}

module.exports = { transform }