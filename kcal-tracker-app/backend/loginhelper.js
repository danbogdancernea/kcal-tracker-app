const jwt =require('jsonwebtoken');

require('dotenv').config();

const getToken = (user) =>{
    return jwt.sign({
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
    },process.env.JWT_SECRET,{
        expiresIn:'24h'
    }
    );
};

const isLoggedIn = (req, res, next) =>{
    const token = req.headers.authorization;

    if(token){
        const onlyToken = token.slice(7, token.length);
        jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
            if (err) {
              return res.status(401).send({ message: 'Invalid Token' });
            }
            req.user = decode;
            next();
            return;
    });
}else {
        return res.status(401).send({ message: 'Token is not supplied.' });
      }
}

const isAdmin = (req, res, next) => {
    console.log(req.user);
    if (req.user && req.user.isAdmin) {
      return next();
    }
    return res.status(401).send({ message: 'Admin Token is not valid.' });
  };
  

module.exports ={getToken, isLoggedIn,isAdmin}