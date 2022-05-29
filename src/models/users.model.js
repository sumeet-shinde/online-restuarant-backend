const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const UsersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

UsersSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  var hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;

  return next();
});

UsersSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("users", UsersSchema);
