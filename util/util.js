

const parseAuth = (req) => {
    // Se obtienen los datos de los headers en base64
    const base64Credentials = req.headers.authorization.split(' ')[1];
    // Parseando la cadena a ascii
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    
    // Regresamos las credenciales
    return credentials.split(':');

    
}

module.exports = {

    parseAuth

}