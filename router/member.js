const express = require('express');
const router = express.Router();

router.get(['/', '/login'], (req, res, next) => {
	res.send('/member');
});

router.get('/logout', (req, res, next) => {
	res.send('/member/logout');
});

router.get('/join', (req, res, next) => {
	res.send('/member/join');
});

module.exports = router;