const express = require('express');
const router = express.Router();

// index - return all products
router.get('/', (req, res, next) => {
    res.status(200).send({
        message: "Using GET on route product"
    });
});

// store - create one product
router.post('/', (req, res, next) => {
    res.status(201).send({
        message: "Using POST on route product"
    });
});

// show - return data of the product by id
router.get('/:product_id', (req, res, next) => {
    const id = req.params.product_id;

    res.status(200).send({
        message: "Using GET to get one exclusive product",
        id
    });
});

// patch - modify one product by id
router.patch('/:product_id', (req, res, next) => {
    res.status(200).send({
        message: "Using PATCH on route product"
    });
});

// delete - delete one product by id
router.delete('/:product_id', (req, res, next) => {
    res.status(200).send({
        message: "Using DELETE on route product"
    });
});

module.exports = router;