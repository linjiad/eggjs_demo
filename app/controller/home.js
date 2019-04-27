'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // 给页面响应信息
    ctx.body = 'hi, egg';
    // 调用extend里面扩展的applition
    console.log(this.app.foo());
    // 调用extend里面扩展的context
    console.log(this.ctx.getIp());
  }
  async news() {
    const { ctx } = this;
    ctx.body = 'hi, news';
  }
  async content() {
    // 获取get传值
    const query = this.ctx.query;
    console.log(query);
    this.ctx.body = '新闻详情';
  }
  async newslist() {
    // 获取get传值
    const params = this.ctx.params;
    console.log(params);
    this.ctx.body = '新闻详情';
  }
}

module.exports = HomeController;
