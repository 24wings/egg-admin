"use strict";
const path = require("path");
// had enabled by egg
exports.static = true;
exports.nunjucks = {
  enable: true,
  package: "egg-view-nunjucks"
};

exports.ua = {
  enable: true,
  path: path.join(__dirname, "../lib/plugin/egg-ua")
};
// config/plugin.js
exports.mysql = {
  enable: true,
  package: "egg-mysql"
};

exports.sequelize = {
  enable: true,
  package: "egg-sequelize"
};
