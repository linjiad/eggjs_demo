'use strict';

const Controller = require('egg').Controller;

class AddminController extends Controller {
  async index() {
    const { ctx } = this;
    // 给页面响应信息
    ctx.body = 'hi, egg2';
  }
}

module.exports = AddminController;
