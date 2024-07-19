const express = require('express');
const router = express.Router();

// index - return all orders
router.get('/', (req, res, next) => {
    res.status(200).send({
        message: "Using GET on route order"
    });
});

// store - create one order
router.post('/', (req, res, next) => {
    res.status(201).send({
        message: "Using POST on route order"
    });
});

// show - return data of the order by id
router.get('/:order_id', (req, res, next) => {
    const id = req.params.order_id;

    res.status(200).send({
        message: "Using GET to get one exclusive order",
        id
    });
});

// delete - delete one order by id
router.delete('/:order_id', (req, res, next) => {
    res.status(200).send({
        message: "Using DELETE on route order"
    });
});

module.exports = router; 