'use strict';
const Controller = require('egg').Controller;
class NewsController extends Controller {
  async index2() {
    const { ctx } = this;
    const list = await this.service.news.getNewsList();
    // 注意 ctx是异步
    // 所以要加await
    const msg = 'ejs';
    // const list = [ '11111', '2222', '3333' ];
    await ctx.render('news2', {
      mag: msg,
      list,
    });
  }
  async index() {
    // 获取数据显示新闻页面
    const { ctx } = this;
    // const list = await this.service.getNewsList(); 这里忘记是service的new
    const list = await this.service.news.getNewsList2();
    await ctx.render('news', {
      list: list.result,
    });
  }

  // 获取详情
  async content() {
    // 获取get传值
    const aid = this.ctx.query.aid;
    const list = await this.service.news.getNewsContent(aid);
    // console.log(list);
    await this.ctx.render('newscontent', {
      list: list[0],
    });


  }
}
module.exports = NewsController;
