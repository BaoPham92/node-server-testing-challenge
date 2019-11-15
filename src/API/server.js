const express = require('express');
const router = require('express').Router();
const Users = require('../Routes/Users/users-model');
router.use(express.json());

router.get('/', (req, res) => {
    res.status(200).json({ serverStatus: "Served" });
})

router.get('/users', (req, res) => {
    Users.getAll()
        .then(userList => res.status(200).json(userList))
        .catch(err => res.status(500).json({
            errorMessage: "Was not able to return requested data user list.",
            errorObject: err
        }))
})

module.exports = router;