var express = require('express');
const item = require('../models/item');
var router = express.Router();


const Item = require('../models/item');

router.get('/', (req, res, next) => {
    Item.find() 
    // .populate('category')
    .then(items => {
        res
            .status(200)
            .json({
                message: 'Items Fetched Successfully',
                items: items
            });
    })
    .catch(error => {
        res.status(500).json({
            message: 'an error occured',
            error: error.message
        });
    });
});

router.get('/:id', (req, res, next) => {
    item.findOne({
        "id": req.params.id
    })
    .populate('group')
    .then(item => {
        res
            .status(200)
            .json({
                message: 'Item Fetched Successfully',
                item: item
            });
    })
    .catch(error => {
        res.status(500).json({
            message: 'an error occured',
            error: error
        });
    });
});

router.post('/', (req, res, next) => {

    const item = new item({
        // id: maxItemId,
        name: req.body.name,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        category: req.body.category
    });

    item.save()
        .then(createdItem => {
            res
            .status(201)
            .json({
                message: 'Item created successfully',
                item: createdItem
            });
        })

    .catch(error => {
        res.status(500).json({
            message: 'an error occured',
            error: error
        });
    });
});

router.put('/:id', (req, res, next) => {
    item.findOne({
        id: req.params.id
    })
    .then(item => {
        item.name = req.body.name;
        item.price = req.body.price;
        item.imageUrl = req.body.imageUrl;
        item.category = req.body.category

        item.updateOne({
            id: req.params.id
        }, item)
        .then(result => {
            res
            .status(204)
            .json({
                message: 'Item updated successfully'
            })
        })
        .catch(error => {
            res
            .status(500)
            .json({
                message: 'An error occured',
                error: error
            });
        });
    })
    .catch(error => {
        res 
        .status(500).json({
            message: 'Item not found', 
            error: {
                item: 'Item not found'
            }
        });
    });
});

router.delete("/id", (req, res, next) => {
    item.findOne({
        id: req.params.id
    })
    .then(item => {
        item.deleteOne({
            id: req.params.id
        })
        .then(result => {
            res.status(204)
            .json({
                message: 'Item deleted successfully'
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'An error occured',
                error: error
            });
        })
    })
    .catch(error => {
        res.status(500).json({
            message: 'An error occured',
            error: error
        });
    })
})



module.exports = router; 