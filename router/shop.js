const express = require('express');
const router = express.Router();

router.get(['/', '/:id'], (req, res, next) => {
	const id = req.params.id || '';
	res.send(`<h1>/shop/${id}</h1>`);
});

router.get('/prd/:id', (req, res, next) => {
	const id = req.params.id;
	res.send('<h1>/shop/prd/'+id+'</h1>');
});

module.exports = router;