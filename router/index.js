const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	const pug = { css: "index", js: "index" }
	res.render('index/index.pug', pug);
});

module.exports = router;