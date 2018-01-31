// app.js

module.exports = app => {
  // app.beforeStart(async () => {
  //   // 从配置中心获取 MySQL 的配置
  //   // { host: 'mysql.com', port: '3306', user: 'test_user', password: 'test_password', database: 'test' }
  //   const mysqlConfig = await app.configCenter.fetch("mysql");
  //   app.database = app.mysql.createInstance(mysqlConfig);
  // });
  app.beforeStart(async function() {
    // 应用会等待这个函数执行完成才启动
    // await app.model.sync();
  });
  app.config.coreMiddleware.unshift("report");
  app.once("server", server => {
    // websocket
  });
  app.on("error", (err, ctx) => {
    // report error
  });
  app.on("request", ctx => {
    // log receive request
    console.log("请求");
    console.log("start");
  });
  app.on("response", ctx => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    // log total cost
  });
};
// 获取方;
