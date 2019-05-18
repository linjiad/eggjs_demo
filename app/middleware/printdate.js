// options:中间件的配置项，框架会将app.config[$(middlewareName)]传递进来
// app:当前应用Application

// 配置中间件（在config中config.middleware）

module.exports = (options, app) => {
  // 返回一个异步方法
  return async function printdate(ctx, next) {
    console.log(new Date());
    console.log(options.aaa);
    await next();
  };
};
