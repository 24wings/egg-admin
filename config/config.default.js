"use strict";

const path = require("path");

module.exports = appInfo => {
  const config = {
    keys: appInfo.name + "_1517297464353_2662",
    bodyParser: {
      jsonLimit: "10mb"
    },
    middleware: [],
    compress: {
      threshold: 2048
    },
    gzip: {
      threshold: 1024 // 小于 1k 的响应体不压缩
    },
    keys: "此处改为你自己的 Cookie 安全字符串",
    view: {
      defaultViewEngine: "nunjucks",
      mapping: {
        html: "nunjucks"
      }
    },
    news: {
      pageSize: 5,
      serverUrl: "https://hacker-news.firebaseio.com/v0"
    },
    mysql: {
      // 单数据库信息配置
      client: {
        // host
        host: "127.0.0.1",
        // 端口号
        port: "3306",
        // 用户名
        user: "root",
        // 密码
        password: "root",
        // 数据库名
        database: "test"
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false
    },
    sequelize: {
      dialect: "mysql", // support: mysql, mariadb, postgres, mssql
      database: "cmswing",
      host: "127.0.0.1",
      port: "3306",
      username: "root",
      password: "root",
      sync: { force: true }
    },
    static: {
      prefix: "/",
      // maxAge: 31536000,
      dir: path.join(appInfo.baseDir, "app/public")
    }
  };

  return config;
};
