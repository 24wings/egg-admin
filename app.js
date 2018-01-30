// app.js

module.exports = app => {
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
