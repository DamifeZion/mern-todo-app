const jwt = require("jsonwebtoken");
const todoModel = require("../models/todoModel");

const requireAuthorization = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization) {
      return res.status(401).json({
        message: "Authorization token required",
      });
    }

    const token = authorization.split(" ")[1];

    const { _id } = await jwt.verify(token, process.env.SECRET);

    req.user = todoModel.findOne({ _id }).select("_id");

    next();
  } catch (error) {
    res.status(401).json({
      message: "Request not authorized",
    });
  }
};

module.exports = requireAuthorization;
