const User = require('../models/userModel');
 // Create the User model using Mongoose

 const mongoose=require('mongoose')


//get all registries
const getUsers=async(req,res,next)=>{
  const user=await User.find({ }).sort({createdAt: -1})
  res.status(200).json(user)

}

//get a single workout
const getUser=async(req,res,next)=>{
  const{id}=req.params

 if(!mongoose.Types.ObjectId.isValid(id)){
  return res.status(404).json({error :'No such User'})

 }
  const  user= await User.findById(id)

  
res.status(200).json(user)

}

//create new registry
const createUser=async(req,res,next)=>{
  const{name,age,gender,disorder,email, password,date, contactNo}=req.body;

let emptyFields =[]
let validationErrors = [];

if(!name){
  emptyFields.push('name')
}

if(!age || age < 0){
  emptyFields.push('age')}
  
if(!gender){
  emptyFields.push('gender')}
  
if(!disorder){
  emptyFields.push('disorder')

}
if(!date){
  emptyFields.push('date')
}

if (!email) {
  emptyFields.push('email');
}  else{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  validationErrors.push('Invalid email format');
}
}

if (!password) {
  
emptyFields.push('password');
} else {
// Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
if (!passwordRegex.test(password)) {
  validationErrors.push('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit');
}
}

if (!contactNo) {
emptyFields.push('contactNo');
} else {
// Contact number validation logic (customize based on your requirements)
const contactNoRegex = /^\d{10}$/; // Assumes a 10-digit contact number
if (!contactNoRegex.test(contactNo)) {
  validationErrors.push('Invalid contact number format');
}
}

if(emptyFields.length>0 || validationErrors.length > 0){
  return res.status(400).json({error:'Please fill out all the fields ', emptyFields,validationErrors})
}

const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);

//add doc to db
   try{
      const user=await User.create({ name,age,gender,disorder,email,date,password: hashedPassword,
      contactNo });
      res.status(200).json(user);
      
}catch(error){
  res.status(400).json({error: error.message});

}
   
 }

 //delete new registry
 const deleteUser=async(req,res,next)=>{
  const{id}=req.params
  
 if(!mongoose.Types.ObjectId.isValid(id)){
  return res.status(404).json({error :'No such User'})

 }

//delete doc to db

      const user=await User.findOneAndDelete({_id: id})
      res.status(200).json(user);

      if(!user){
        return res.status(404).json({error:"No such User"}
        )
      }
      res.status(200).json(user) }


//update new registry
const updateUser=async(req,res,next)=>{
  const{id}=req.params
  
 if(!mongoose.Types.ObjectId.isValid(id)){
  return res.status(404).json({error :'No such User'})
} 

const user=await User.findOneAndUpdate({_id: id},{
 ... req.body

})


if(!user){
  return res.status(400).json({error:"No such User"}
  )
}
res.status(200).json(user) }
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Controller function to handle user sign-in
const signInUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Incorrect password' });
    }
    
   

    // Generate a JSON Web Token (JWT) for authentication
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token expiration time
    });

    res.status(200).json({ message: 'Sign in successful', token, user: { email } });
  } catch (error) {
    console.error('Error during sign-in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



module.exports={
  getUsers,
  getUser,
  createUser,
deleteUser,
updateUser,
signInUser}

 
