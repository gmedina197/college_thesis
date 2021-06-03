const jwt = require("jsonwebtoken");
const axios = require("axios").default;

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token not provided" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await axios.post(process.env.AUTH_URL, {
      token,
    });

    if (!decoded.data.authenticated) {
      return res.status(401).json({ message: "Token invalid" });
    }

    req.userId = decoded.data.userId;

    return next();
  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: "Token invalid" });
  }
};
