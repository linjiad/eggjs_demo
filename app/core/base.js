'use strict';
const Controller = require('egg').Controller;
class BaseController extends Controller {
  async getUserInfo() {
    return {
      name: '张三',
      age: 20,
    };
  }
  async success(redirectUrl) {
    /* await this.ctx.render('public/success', {
      redirectUrl: redirectUrl || '/',
    });*/
    this.ctx.status = 301; // 把重定向改为301
    this.ctx.redirect(redirectUrl); // 默认是临时重定向 302

  }
  async error(redirectUrl) {
    await this.ctx.render('public/error', {
      redirectUrl: redirectUrl || '/',
    });
  }
}
module.exports = BaseController;
