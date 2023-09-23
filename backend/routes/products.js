const router = require('express').Router()
let Product = require('../models/product.model')
const { paginatedResults } = require('./paginatedResults')


router.route('/').get(paginatedResults(Product), (req, res) => {
    res.json(res.paginatedResults)
})

// function paginatedResults(model) {
//     return (async (req, res, next) => {
//         const page = parseInt(req.query.page)
//         const limit = parseInt(req.query.limit)

//         const startIndex = (page - 1) * limit
//         const endIndex = page * limit

//         const results = {};


//         if (endIndex < model.length) {
//             results.next = {
//                 page: page + 1,
//                 limit: limit

//             }
//         }


//         if (startIndex < 0) {
//             results.previous = {
//                 page: page - 1,
//                 limit: limit
//             }
//         }

//         try {
//             results.result = await model.find().limit(limit).skip(startIndex).exec()
//             res.paginatedResults = results
//             console.log(results)
//             next()
//         }
//         catch (err) {
//             res.status(500).json({ message: err.message })
//         }

//     })
// }


router.route('/add').post((req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const tag = req.body.tag;



    const newProduct = new Product({
        name,
        price,
        tag
    });

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})





module.exports = router