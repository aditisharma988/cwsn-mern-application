
const express = require('express');
const router = express.Router();

const{
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  // signInUser,
}=require('../controllers/userController');



//routes
//GET all registries
router.get('/getUsers', getUsers);

//GET a single registry
router.get('/:id', getUser);

 //POST a new registry  
 router.post('/createUser',createUser);

  //DELETE a new registry  
  router.delete('/:id' ,deleteUser)

  //UPDATE a new registry  
  router.patch('/:id' ,updateUser)






module.exports=router;


