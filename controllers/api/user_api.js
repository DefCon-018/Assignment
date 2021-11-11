const User = require('../../models/user');
const jwt = require('jsonwebtoken');

module.exports.createSession = async function (req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user || user.password != req.body.password) {
      return res.status(422).json({
        message: 'Invalid email/password',
        success: false,
      });
    }
    return res.status(200).json({
      message: 'Sign in successfully, here is your token keep it safe',
      success: true,
      user,
      data: {
        token: jwt.sign(user.toJSON(), 'ensvee', { expiresIn: '10000000' }),
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
      success: false,
    });
  }
};

module.exports.create = async function (req, res) {
  try {
    if (req.body.password != req.body.confirm_password) {
      return res.status(422).json({
        message: 'Passwords mismatch',
        success: false,
        error: 'Porword mismatch',
      });
    } else {
      let user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      return res.status(200).json({
        message: 'user created successfully',
        user: user,
        success: true,
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: 'Internal server error',
      success: false,
    });
  }
};
