const proxy = require('http-proxy-middleware');

// 요청 : /api/**
// 실제 : http://localhost:8080/api/**
const apiUrl = 'http://localhost:8080';
const apiContext = ['/api'];

module.exports = (app) => {
    app.use(
        proxy(apiContext, {
            target: apiUrl,
            changeOrigin: true,
        })
    );
};