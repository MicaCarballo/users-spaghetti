const userControllers = require('./users.controllers')

const getAllUsers = (req,res) => {
userControllers.findAllUsers()
.then((data)=>{
    res.status(200).json(data)
})
.catch((err)=>{
    res.status(400).json({message: err.message})
})
}

const getUserById = (req,res) => {
    const id = req.params.id;
    userControllers.findUserById(id)
    .then ((data)=>{
        if(data){
            res.status(200).json(data)
        }else{
            res.status(404).json({message:'invalid id'})
        }
    })
    .catch((err)=>{
        res.status(400).json({message:'error'})
    })
}

const postUser = (req,res) => {
    const{first_name, last_name,email,password,birthday} = req.body;
    userControllers.createUser({first_name, last_name, email,password,birthday})
    .then((data)=>{
        res.status(201).json(data)
    })
    .catch((err)=>{
        res.status(400).json({message:err.message})
    })
}

const patchUser = (req,res) => {
    const id = req.params.id;
    const{first_name, last_name,email,password,birthday} = req.body;
    userControllers.updateUser(id, {first_name, last_name, email,password,birthday})
    .then((data)=>{
        if(data){
            res.status(200).json({message:'user updated'})
        }else{
            res.status(400).json({message:'invalid id'})

        }
    });
       
   
    }


const deleteUser = (req,res) => {
    const id = req.params.id;
    const {first_name,last_name,email,password,birthday} = req.body;
    userControllers.deleteUser(id,{first_name,last_name,email,password,birthday})
  .then((data)=>{
    if(data){
res.status(200).json({message:'user deleted'})
    }else{
res.status(400).json({message:'invalid id'})
    }
  })
}


module.exports ={
    getAllUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser
}