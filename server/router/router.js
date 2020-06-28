const express = require('express');
const router = express.Router();
require('dotenv').config();

// * Server port from the env file 
const PORT = process.env.PORT
/**
 *  * router request to / URL
 */
router.get('/', (req, res) => {
    res.send(`Server is up and running at port ${PORT}`)
});

module.exports = router;