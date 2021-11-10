const express = require('express');
const router = express.Router();

const userApi = require('../../controllers/api/user_api');
router.post('/create', userApi.create);
router.post('/login', userApi.createSession);

module.exports = router;
