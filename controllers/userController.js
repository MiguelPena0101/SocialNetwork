const User = require('../models/User');

module.exports = {
  // Get all users
  getAllUsers(req, res) {
    User.find()
      .populate('thoughts')
      .populate('friends')
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single user by ID
  getUserById(req, res) {
    User.findOne({ _id: req.params.id })
      .populate('thoughts')
      .populate('friends')
      .then((user) =>
        !user ? res.status(404).json({ message: 'No user found with this ID!' }) : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // Update a user by ID
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user ? res.status(404).json({ message: 'No user found with this ID!' }) : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete a user by ID
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then((user) =>
        !user ? res.status(404).json({ message: 'No user found with this ID!' }) : res.json({ message: 'User deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
};
