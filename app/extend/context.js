module.exports = {
  getIp() {
    // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
    // console.log(this);
    /* {
     request:{ method: 'GET',
          url: '/home',
          header:
          { host: '127.0.0.1:7001',
              connection: 'keep-alive',
              'cache-control': 'max-age=0',
              'upgrade-insecure-requests': '1',
              'user-agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.62 Safari/537.36',
                  accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*!/!*;q=0.8',
                  'accept-encoding': 'gzip, deflate, br',
              'accept-language': 'zh-CN,zh;q=0.9',
              cookie: 'csrfToken=bJyFdo330yt11st4rX0DUbxW' } },
     response:{ status: 200,
              message: 'OK',
              header:
              [Object: null prototype] {
              'content-type': 'text/plain; charset=utf-8',
                  'content-length': '7' } },
     app:{ env: 'local',
              name: 'egg_demo',
              baseDir: 'D:\\PriviteWork\\nodejs\\eggjs_demo',
              subdomainOffset: 2,
              config: '<egg config>',
              controller: '<egg controller>',
              httpclient: '<egg httpclient>',
              loggers: '<egg loggers>',
              middlewares: '<egg middlewares>',
              router: '<egg router>',
              serviceClasses: '<egg serviceClasses>' },
     originalUrl: '/home',
     req: '<original node req>',
     res: '<original node res>',
     socket: '<original node socket>'
    }*/
    return this.request.header.host;
  },
};
