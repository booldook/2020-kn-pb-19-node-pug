const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './views');

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

app.use('/', express.static(publicPath));

app.get('/', (req, res, next) => {
	res.redirect("/index");
});

app.get('/index', (req, res, next) => {
	const pug = {
		css: "index",
		js: "index"
	}
	res.render('index/index.pug', pug);
});

app.get('/shop', (req, res, next) => {

});

app.get('/shop/:id', (req, res, next) => {

});

app.get('/member', (req, res, next) => {

});

app.get('/member/join', (req, res, next) => {

});

app.get('/cart', (req, res, next) => {

});

app.get('/pay', (req, res, next) => {

});

app.use((req, res, next) => {
	const pug = { code: '404', msg: '요청하신 페이지를 찾을 수 없습니다.' }
	res.render('error.pug', pug);
});

app.use((error, req, res, next) => {
	const pug = { code: '404', msg: '요청하신 페이지를 찾을 수 없습니다.' }
	res.render('error.pug', pug);
});