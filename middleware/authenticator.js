const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');

exports.authenticateJWT = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token)

  if(!token){
    return res.status(401).json({
      errorMessage: 'No token, Authorizathion denied'
    })
  }

  try{
    const decode = jwt.verify(token, jwtSecret)

    req.user = decode.user;

    next()
  }catch(err){
    console.log('jwt error:', err);
    res.status(401).json({
      errorMessage: 'Invalid token'
    })
  }
}