/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_linjiad';
  // add your middleware config here
  // 增加配置中间件
  /* config.middleware = [ 'printdate', 'forbidip', 'auth' ];*/
  config.middleware = [ 'forbidip', 'auth', 'jsonp', 'compress' ];
  // 配置中间件参数
  /* config.printdate = {
    aaa: 'aaa',
  };*/
  // 配置压缩的参数
  /* config.compress = {
    // enable: false,
    match: '/newscontent',
    threshold: 1024, // 它支持指定只有当 body 大于配置的 threshold 时才进行 gzip 压缩
  };*/
  // 多个路径时
  config.compress = {
    // enable: false,
    match(ctx) {
      // ctx 上下文  可以获取请求的地址
      console.log(ctx.request.url);
      if (ctx.request.url === '/shop' || ctx.request.url === '/news') {
        return true;
      }
      return false;
    },
    threshold: 1024, // 它支持指定只有当 body 大于配置的 threshold 时才进行 gzip 压缩
  };
  // 设置拒绝访问的ip
  config.forbidip = {
    ip: [
      '127.0.0.1',
      '192.168.0.1',
    ],
  };
  // 框架中间件的默认配置
  config.bodyParser = {
    jsonLimit: '10mb', // Default is 1mb.
  };
  // 设置session
  config.session = {
    key: 'SESSION_ID',
    maxAge: 864000,
    renew: true, // 延长会话有效期，每次刷新页面的时候session都会被延期（重新计算过期时间）
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 配置模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  config.api = 'www.linjaid.com';
  // 配置公共的api
  config.api2 = 'http://www.phonegap100.com/appapi.php';
  config.api3 = 'http://www.phonegap100.com/appapi.php';
  return {
    ...config,
    ...userConfig,
  };
};
