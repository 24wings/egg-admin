"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    let actions = await this.ctx.service.action.find();
    this.ctx.body = actions;
  }
}

module.exports = HomeController;
