const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  disorder: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase:true,
  },
  password: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String},

date:{
  type: Date,
  required:false,
},},{
 timestamps: true }
);
userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  next();
});

const user = mongoose.model('User', userSchema);


module.exports = mongoose.model('userModel',userSchema);


