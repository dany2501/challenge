const Response = require('./Response');
module.exports = class AuthRS extends Response {
    constructor(success, error, base64) {
        super(success, error);
        this.base64 = base64;
    }
}