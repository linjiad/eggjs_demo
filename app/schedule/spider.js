// var k=110;
// module.exports={
//     schedule: {
//         interval: '5s', // 1 分钟间隔
//         type: 'all', // 指定所有的 worker 都需要执行
//     },

//     async task(ctx) {
//         ++k;
//         console.log(k)
//     }
// }
let k = 110;
module.exports = app => {
  return {
    // 定时任务配置
    schedule: {
      // 每三小时准点执行一次
      // cron: '0 0 */3 * * *',
      interval: '5s', // 1 分钟间隔
      type: 'all', // 指定所有的 worker 都需要执行,
      // disable:true
    },
    // 执行的方法
    async task(ctx) {
      ++k;
      // 可以调用服务中的方法
      // var result=await ctx.service.news.getNewsList()
      // console.log(result)
      console.log(k);
    },
  };
};
