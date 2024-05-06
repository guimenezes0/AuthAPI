const express = require('express');
const router = express.Router();
const User = require('../models/user');
const auth = require('../middleware/auth');

router.post('/register', async (req, res) => {
  // Register a new user
});

router.post('/login', async (req, res) => {
  // Login a registered user
});

router.get('/me', auth, async(req, res) => {
  // View logged in user profile
});

router.post('/me/logout', auth, async (req, res) => {
  // Log user out of the application
});

router.post('/me/logoutall', auth, async(req, res) => {
  // Log user out of all devices
});

module.exports = router;
