// 外部可以通过 this.app.foo() 来调用这个方法
module.exports = {
  foo(param) {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    // console.log(this);
    /* { env: 'local',
          name: 'egg_demo',
          baseDir: 'D:\\PriviteWork\\nodejs\\eggjs_demo',
          subdomainOffset: 2,
          config: '<egg config>',
          controller: '<egg controller>',
          httpclient: '<egg httpclient>',
          loggers: '<egg loggers>',
          middlewares: '<egg middlewares>',
          router: '<egg router>',
          serviceClasses: '<egg serviceClasses>'
      }*/
    return this.config.api;
  },
};
