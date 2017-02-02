//------------------------------------------------------------------------
// Node Dependencies

//------------------------------------------------------------------------
// External Dependencies
var express = require('express');
var Joi     = require('joi');
var lodash  = require('lodash');

//------------------------------------------------------------------------
// list Router 
var listsRouter = express.Router();

//------------------------------------------------------------------------
// Models
var Item = Utils.getModel('Item');
var List = Utils.getModel('List');

//------------------------------------------------------------------------
// Get List
listsRouter.get('/', (req, res, next) => {

    List
        .find({})
        .populate('items')
        .exec((err, lists) => {
            if (err) return next(err);
            res.status(200).json(lists);
        });
});

listsRouter.get('/:listId', (req, res, next) => {

    List
        .findById(req.params.listId)
        .populate('items')
        .exec((err, list) => {
            if (err) return next(err);
            if (!list) return res.status(404).json({message: 'Invalid List id'});
            res.status(200).json(list);
        });
});

//------------------------------------------------------------------------
// Create new List
listsRouter.post('/', (req, res, next) => {

    //=====================
    var list = new List({
        name: req.body.name
    });

    //=====================
    list.save((err) => {
        if (err) return next(err);
        res.status(200).json({message: 'new list created ' + list._id});
    });
});

//------------------------------------------------------------------------
// Create new Item
listsRouter.post('/:listId/items', (req, res, next) => {

    //=====================
    List
        .findById(req.params.listId)
        .populate('items')
        .exec((err, list) => {
            if (err) return next(err);
            if (!list) return res.status(404).json({message: 'Invalid List id'});

            // Create new Item
            var item = new Item({
                name: req.body.name
            });

            // Save Item
            item.save((err) => {
                if (err) return next(err);
                
                // Push Item to List
                list.items.push(item._id);
                list.save((err) => {
                    if (err) return next(err);
                    res.status(200).json({message: 'Item saved'});
                });    
            });
        });
});

//------------------------------------------------------------------------
// Exports
module.exports = listsRouter;