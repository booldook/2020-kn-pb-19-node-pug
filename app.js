const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, './public');
const imgPath = path.join(__dirname, './public/img');
const viewsPath = path.join(__dirname, './views');

const indexRouter = require('./router');
const shopRouter = require('./router/shop');


app.listen(3000, () => { console.log("http://127.0.0.1:3000") });

app.set('view engine', 'pug');
app.set('views', viewsPath);
app.locals.pretty = true;

/*
/index				-> 메인페이지 	- index/index.pug
/shop 				-> 상품리스트 	- shop/list.pug
/shop/2 			-> 2번상품			- shop/detail.pug
/member 			-> 로그인페이지	- member/login.pug
/member/join	-> 회원가입			- member/join.pug
/cart					-> 장바구니			- cart/cart.pug
/pay					-> 결제페이지		- pay/pay.pug
*/

app.use('/img', express.static(imgPath));
app.use((req, res, next) => {
	const err = new Error();
	err.code = 500;
	err.msg = '서버 점검 중입니다. 잠시 후 이용하세요.';
	next(err);
});

app.use('/', express.static(publicPath));
app.use('/', indexRouter);
app.use('/shop', shopRouter);




app.get('/member', (req, res, next) => {

});

app.get('/member/join', (req, res, next) => {

});

app.get('/cart', (req, res, next) => {

});

app.get('/pay', (req, res, next) => {
	next(new Error());
});

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