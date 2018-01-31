// app/service/user.js
const sequelize = require("sequelize");
const Service = require("egg").Service;

// do something with the err.

class ActionService extends Service {
  async find(uid) {
    // console.log(this.ctx);
    // const user = await this.app.mysql.query(
    //   "select * from cmswing.cmswing_action "
    // );

    let users = await this.ctx.app.model.Action.findAll();
    console.log(users);
    return users;
  }
  async create(name) {
    let newAction;
    this.app.model.transaction(async t => {
      newAction = await this.app.model.Action.create(
        {
          name: "12345"
        },
        { transition: t }
      );
      // t.commit();
    });

    return [];
  }
}

module.exports = ActionService;
