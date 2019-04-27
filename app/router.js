'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.news.index);
  router.get('/newscontent', controller.news.content);
  router.get('/home', controller.home.index);
  router.get('/newa', controller.news.index2);
  router.get('/news', controller.home.news);
  router.get('/content', controller.home.content);
  router.get('/newslist/:id', controller.home.newslist);
  router.get('/news2', controller.admin.index);
};
