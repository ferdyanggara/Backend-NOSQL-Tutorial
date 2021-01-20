const User = require('../models/UserModel')


exports.addUser = async(req,res)=>{
  const newUser = new User({
    name: 'Ferdy',
    age: 21
  })
  const result = await newUser.save()
  res.send(result)
}

exports.allUsers = async(req,res)=>{
  const allUser = await User.find()
  res.send(allUser)
}

exports.specUser = async(req,res)=>{
  const user = await User.findByIdAndDelete(req.params.id)
  res.send(user)
}