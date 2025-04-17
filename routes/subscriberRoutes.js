const express = require('express');
const router = express.Router();
const { addsubscriber, getAllsubscriber } = require('../controllers/subscribercontroller');

router.post('/subscriber', addsubscriber);

router.get('/subscriber', getAllsubscriber);

module.exports = router;
