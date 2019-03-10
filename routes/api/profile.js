const express = require('express');
const router = express.Router();

// @route   GET api/profilr/test
// @desc    Tests profile route
// @acess   Public

router.get('/test', (req, res)=> res.json({msg: "Profile Works!"}));

module.exports = router;