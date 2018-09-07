// Another route facade on top of our router detail
// We wrap all the route detail in the mean.route.js
// This route facade hides those detail and could be used by others

var express = require('express')

var router = express.Router()
var meanRoute = require('./api/mean.route')

router.use('/mean', meanRoute);

module.exports = router;