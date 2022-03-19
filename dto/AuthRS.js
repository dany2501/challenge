const Response = require('./Response');
module.exports = class AuthRS extends Response {
    constructor(success, error) {
        super(success, error);
    }
}