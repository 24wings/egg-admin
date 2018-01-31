// app/model/user.js

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  // console.log("ss");
  return app.model.define(
    "action",
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30)
      //   title: STRING(32)
      //     remark: INTEGER,
      //   created_at: DATE,
      //   updated_at: DATE
    },
    {
      classMethods: {
        *findByLogin() {
          yield this.findOne();
        }
      }
    }
  );
};
