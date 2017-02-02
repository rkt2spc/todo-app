//------------------------------------------------------------------------
// Navigation Router
var express     = require('express');
var navRouter   = express.Router();

//------------------------------------------------------------------------
// Navigation Routes
navRouter.use((req, res, next) => {
    console.log('HIHI');
    res.sendFile(Utils.root_path + '/public/build/index.html');
});

//------------------------------------------------------------------------
// Exports
module.exports = navRouter;