const jwt = require('jsonwebtoken');

const verifyRole = (allowedRoles) => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return res.status(403).json({ message: 'Acceso denegado: No se proporcionó token' });
      }
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Acceso denegado: Permisos insuficientes' });
      }

      next();
    } catch (err) {
      res.status(401).json({ message: 'Token inválido o expirado' });
    }
  };
};

module.exports = { verifyRole };
