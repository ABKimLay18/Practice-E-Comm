import crypto from 'crypto';

const jwt_key = crypto.randomBytes(32).toString('hex');

console.table(jwt_key);