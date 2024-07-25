const jwt = require('jsonwebtoken');

const JWT_SECRET = 'homunculi_in_fmab_make_me_sad';

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization ;
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token' });
        }
        req.userId = decoded.id;
        next();
    });
};

module.exports = authenticateJWT;
