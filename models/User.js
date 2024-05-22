const mongoose =require('mongoose');
const validator = require('validator');
const{ boolean } = require('webidl-conversions')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
 username: {
    type: String,
    required: [true, 'Please tell us your name!'],
    unique:true
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  photo: String,
  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user'
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false
  },
  isAdmin:{
    type:Boolean,
    default:false,
  },
  timestamps:true
});


userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password or email');
  }
  throw Error('incorrect password or email');
};

module.exports = mongoose.model("User", userSchema)