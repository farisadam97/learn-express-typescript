const User = require("../Model/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerUser = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username) {
    res.status(400).send({
      message: "Username must not empty!",
    });
  }

  if (!password) {
    res.status(400).send({
      message: "Password must not empty!",
    });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(400).send({
        message: "Username already exist!",
      });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      password: hashedPassword,
    });

    return res.status(200).send({
      message: "User successfully created",
      data: {
        username: newUser.username,
        createdAt: newUser.createdAt,
      },
    });
  } catch (error) {}
};

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).send({
        message: "Invalid username or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send({
        message: "Invalid username or password",
      });
    }
    const token = jwt.sign(
      {
        id: user.__id,
      },
      process.env.JWT_SECRET
    );

    res.status(200).send({
      message: "SUCCESS",
      user: {
        username: user.username,
        token: token,
      },
    });
  } catch (error) {}
};

module.exports = { registerUser, loginUser };
