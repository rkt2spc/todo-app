//------------------------------------------------------------------------
// API Router
var express     = require('express');
var apiRouter   = express.Router();

//------------------------------------------------------------------------
// API endpoints
// var itemsRouter      = require('./endpoints/items');
var listsRouter  = require('./endpoints/lists');

//------------------------------------------------------------------------
// Mount API endpoints on router
// apiRouter.use('/items', authRouter);
apiRouter.use('/lists', listsRouter);

//------------------------------------------------------------------------
// Exports
module.exports = apiRouter;