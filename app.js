/*
/index				-> 메인페이지 	- index/index.pug
/shop 				-> 상품리스트 	- shop/list.pug
/shop/2 			-> 2번상품			- shop/detail.pug
/member 			-> 로그인페이지	- member/login.pug
/member/join	-> 회원가입			- member/join.pug
/cart					-> 장바구니			- cart/cart.pug
/pay					-> 결제페이지		- pay/pay.pug
*/

const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './views');

const indexRouter = require('./router');
const shopRouter = require('./router/shop');
const memberRouter = require('./router/member');
const cartRouter = require('./router/cart');
const payRouter = require('./router/pay');
const stopRouter = require('./router/server-stop');

app.listen(3000, () => { console.log("http://127.0.0.1:3000") });

app.set('view engine', 'pug');
app.set('views', viewsPath);
app.locals.pretty = true;

// app.use(stopRouter); // 서버점검
app.use('/', express.static(publicPath));
app.use('/', indexRouter);
app.use('/shop', shopRouter);
app.use('/member', memberRouter);
app.use('/cart', cartRouter);
app.use('/pay', payRouter);


app.use((req, res, next) => {
	const err = new Error();
	err.code = 404;
	err.msg = '요청하신 페이지를 찾을 수 없습니다.';
	next(err);
});

app.use((error, req, res, next) => {
	code = error.code || 500;
	msg = error.msg || '서버 내부 오류입니다. 관리자에게 문의하세요.';
	res.render('error.pug', { code, msg });
});