const express = require('express');
const router = express.Router();

const path = require('path');
const imgPath = path.join(__dirname, '../public/img');

router.use('/img', express.static(imgPath));
router.use((req, res, next) => {
	const err = new Error();
	err.code = 500;
	err.msg = '서버 점검 중입니다. 잠시 후 이용하세요.';
	next(err);
});

module.exports = router;