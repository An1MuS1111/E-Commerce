const router = require('express').Router()
let Product = require('../models/product.model')
const { paginatedResults } = require('../middleware/paginatedResults')


router.route('/').get(paginatedResults(Product), (req, res) => {
    res.json(res.paginatedResults)
})



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