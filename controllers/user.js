const User = require("../models/User");

exports.addUser = async (req, res, next) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    if (!name || !email || !phonenumber) {
      res
        .status(400)
        .json({
          error: "Send all required fields: name, email, and phonenumber",
        });
      return;
    }
    const data = await User.create({
      name: name,
      email: email,
      phonenumber: phonenumber,
    });
    res.status(201).json({ data: data });
  } catch (err) {
    console.log(err);
    res.status(501).json({ Error: err.errors[0] });
  }
};

exports.showUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ data: users });
  } catch (err) {
    res.status(501).json({ Error: err.errors[0] });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const result = await User.destroy({ where: { id: id } });
    res.status(200).json({ data: result });
  } catch (err) {
    res.status(500).json({ Error: err });
  }
};
