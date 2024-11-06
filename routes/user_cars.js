const express = require('express');
const router = express.Router();

const userCarController = require('../controllers/userCar')

router.get('/', userCarController.getAll);

router.get('/:id', userCarController.getSingle);

router.post('/', userCarController.createUser);

router.put('/:id', userCarController.updateUser);

router.delete('/:id', userCarController.deleteUser);

module.exports = router;
