'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 路由中获取中间件
  const auth = app.middleware.printdate({ aaa: 'aaa' });
  router.get('/', auth, controller.news.index);
  router.get('/newscontent', controller.news.content);
  router.get('/home', controller.home.index);
  router.get('/newa', controller.news.index2);
  router.get('/news', controller.home.news);
  router.get('/content', controller.home.content);
  router.get('/newslist/:id', controller.home.newslist);
  router.get('/news2', controller.admin.index);
  router.get('/post', controller.post.index);
  router.post('/add', controller.post.add);
  router.get('/shop', auth, controller.shop.index);
};
