//------------------------------------------------------------------------
// API Router
var express     = require('express');
var apiRouter   = express.Router();

//------------------------------------------------------------------------
// API endpoints
var listsRouter  = require('./endpoints/lists');

//------------------------------------------------------------------------
// Mount API endpoints on router
apiRouter.use('/lists', listsRouter);

//------------------------------------------------------------------------
// Exports
module.exports = apiRouter;