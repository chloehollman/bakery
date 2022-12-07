var express = require('express');
const category = require('../models/category');
const Category = require('../models/category');
var router = express.Router();


router.get('/', (req, res, next) => {
    Category.find() 
    .populate('category')
    .then(categories => {
        res
            .status(200)
            .json({
                message: 'Categories Fetched Successfully',
                categories: categories
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
    category.findOne({
        "id": req.params.id
    })
    .populate('group')
    .then(category => {
        res
            .status(200)
            .json({
                message: 'category Fetched Successfully',
                category: category
            });
    })
    .catch(error => {
        res.status(500).json({
            message: 'an error occured',
            error: error
        });
    });
});

// router.post('/', (req, res, next) => {

//     const category = new category({
//         // id: maxItemId,
//         name: req.body.name,
//         // category: req.body.category
//     });

//     category.save()
//         .then(createdCategory => {
//             res
//             .status(201)
//             .json({
//                 message: 'Category created successfully',
//                 category: createdCategory
//             });
//         })

//     .catch(error => {
//         res.status(500).json({
//             message: 'an error occured',
//             error: error
//         });
//     });
// });

// router.put('/:id', (req, res, next) => {
//     category.findOne({
//         id: req.params.id
//     })
//     .then(category => {
//         category.name = req.body.name;

//         category.updateOne({
//             id: req.params.id
//         }, category)
//         .then(result => {
//             res
//             .status(204)
//             .json({
//                 message: 'category updated successfully'
//             })
//         })
//         .catch(error => {
//             res
//             .status(500)
//             .json({
//                 message: 'An error occured',
//                 error: error
//             });
//         });
//     })
//     .catch(error => {
//         res 
//         .status(500).json({
//             message: 'category not found', 
//             error: {
//                 category: 'category not found'
//             }
//         });
//     });
// });

// router.delete("/id", (req, res, next) => {
//     category.findOne({
//         id: req.params.id
//     })
//     .then(category => {
//         category.deleteOne({
//             id: req.params.id
//         })
//         .then(result => {
//             res.status(204)
//             .json({
//                 message: 'category deleted successfully'
//             });
//         })
//         .catch(error => {
//             res.status(500).json({
//                 message: 'An error occured',
//                 error: error
//             });
//         })
//     })
//     .catch(error => {
//         res.status(500).json({
//             message: 'An error occured',
//             error: error
//         });
//     })
// })



module.exports = router; 