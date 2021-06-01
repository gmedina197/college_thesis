const jwt = require("jsonwebtoken");
class AuthenticationController {
  async auth(req, res) {
    const token = req.body.token;

    if (!token) {
      return res.status(401).json({ message: "Token not provided" });
    }

    try {
      const decoded = await jwt.verify(token, process.env.APP_SECRET);

      return res.json({
        userId: decoded.id,
        authenticated: true,
      });
    } catch (err) {
      console.log(err);
      return res.status(401).json({
        authenticated: false,
        message: "Token invalid",
      });
    }
  }
}

module.exports = new AuthenticationController();
