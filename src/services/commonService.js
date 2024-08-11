const crypto = require('crypto');

class CommonService {
    generateId(length = 4) {
        return crypto.randomBytes(length).toString('hex');
    }
}

module.exports = new CommonService();
