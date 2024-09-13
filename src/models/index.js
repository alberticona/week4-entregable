const User = require("./User");
const EmailCode = require("./EmailCode");

//EmailCode -> userId
EmailCode.belongsTo(User) //userId
User.hasMany(EmailCode)