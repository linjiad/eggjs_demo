// cheerio模块的使用
/*
 1、安装cnpm i cheerio --save
 2、引入cheerio模块
 3、加载要解析的内容
    const $ = cheerio.load('<h2 class="title">Hello world</h2>')
4、用法
 $('title').html()   获取了要匹配的标题的内容
5、获取的汉子是乱码
 const $ = cheerio.load('<h2 class="title">Hello world</h2>',{decodeEntities: false})
*/
const cheerio = require('cheerio');
module.exports = app => {
  return {
    schedule: {
      interval: '5s', // 1 分钟间隔
      type: 'all',
    },
    async task(ctx) {
      // 1、抓取网站内容
      const url = 'https://news.baidu.com/';
      // 2. 调用服务中的方法
      const result = await ctx.service.spider.requestUrl(url);
      const htmlData = result.data.toString();
      // 3、解析数据
      // 检测网站是否被篡改     检测网站是否挂掉
      const $ = cheerio.load(htmlData, { decodeEntities: false });
      const title = $('title').html();
      if (title !== '百度新闻——海量中文咨询平台') {
        console.log('网站挂掉了 或者被修改了');
      } else {
        console.log('正常');
      }
      // 获取到了hotnews下面所有的a标签的内容
      $('.hotnews a').each(function() {
        console.log($(this).html());
      });
    },
  };
};
