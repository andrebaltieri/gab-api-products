const express = require('express');
const router = express.Router();

module.exports = function (app) {
    app.use('/', router);
};

router.get('/v1/products', (req, res, next) => {
    res.status(200).json([{
            id: '1',
            title: 'Mouse Razer Deathadder',
            price: '299.90'
        },
        {
            id: '2',
            title: 'Teclado Tesoro',
            price: '399.90'
        },
        {
            id: '3',
            title: 'Cadeira Gamer',
            price: '1299.00'
        },
        {
            id: '4',
            title: 'Monitor LG UltraWide',
            price: '899.90'
        },
        {
            id: '5',
            title: 'Caixas de Som Edifier',
            price: '599.90'
        },
        {
            id: '6',
            title: 'Apple Magic Mouse',
            price: '599.90'
        }
    ]);
});