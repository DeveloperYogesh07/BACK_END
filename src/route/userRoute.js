const express = require('express');

const router = express.Router();

const {HomePage,
    getAllUsers,
    createNewUser,
    updateUserById,
    deleteUserById } = require('../controller/userContoller')


router.get('/',HomePage);

router.get('/users',getAllUsers);

router.post('/user',createNewUser);

router.put('/user/:id',updateUserById);

router.delete('/user/:id',deleteUserById);

module.exports = router;