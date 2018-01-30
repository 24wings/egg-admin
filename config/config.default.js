"use strict";

module.exports = appInfo => {
  const config = {
    keys: appInfo.name + "_1517297464353_2662",
    bodyParser: {
      jsonLimit: "10mb"
    },
    middleware: ["gzip", "compress"],
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
    }
  };
  return config;
};
