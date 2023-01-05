const jwt = require('jsonwebtoken');

// eslint-disable-next-line consistent-return
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    // eslint-disable-next-line no-undef
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json('Token is not valid!');
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json('You are not authenticated');
  }
};

module.exports = { verifyToken };
