module.exports = function (permittedRoles) {
    return function (req, res, next) {
      // first get the user from the req
      const user = req.user;
  
  
      let isPermitted = false;
      permittedRoles.map((role) => {
      
        if (user.role.includes(role)) {
          isPermitted = true;
        }
      });
  
    
      if (!isPermitted) {
        return res.status(403).send({ message: "Permission denied" });
      }
      // if yes then return next
      return next();
    };
  };