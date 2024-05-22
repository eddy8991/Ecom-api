const User = require('../models/User')
const jwt = require('jsonwebtoken')


const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'mysuperlongsecret', {
    expiresIn: maxAge
  });
};

module.exports.signup = async(req,res) => {
  const {username, email, password} = req.body;
  try{
    const user = await User.create({username, email, password});
    const token = createToken(user._id)
      res.cookie('jwt',token,{httpOnly:true,  maxAge: maxAge * 1000})
      res.status(201).json({user:user._id})
  }catch(err){
    res.status(500).json(err)
  }
}


module.exports.login = async(req,res) =>{
  const {email, password} = req.body;

  try{
    const user = await User.login(email,password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
    res.status(200).json({user:user._id})
  }
  catch(err) {


  }
}