const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');




// Middleware to authenticate user
module.exports.authUser = async (req, res, next) => {
    //token can found in cookies or headers
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({ message: 'Unauthorized.' });
    }

    const blacklistToken = await blacklistTokenModel.findOne({ token: token });
    if(blacklistToken){
        return res.status(401).json({ message: 'Unauthorized.' });
    }

    // decode the token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user; // attach user to request object
        return next(); // proceed to the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized.' });
        
    }
}