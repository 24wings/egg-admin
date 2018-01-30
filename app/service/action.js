// app/service/user.js
const Service = require("egg").Service;

class ActionService extends Service {
  async find(uid) {
    console.log(this.ctx);
    const user = await this.app.mysql.query(
      "select * from cmswing.cmswing_action "
    );
    return user;
  }
}

module.exports = ActionService;
