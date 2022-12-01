const users = require('../models/users.models');

const findAllUsers = async () => {
const data = await users.findAll()
return data
}

const findUserById = async (id) => {
    const data = await users.findOne({
        where: {
            id:id
        }
    })
    return data;
}

const createUser = async (obj) => {
    const data = await users.create({
        first_name: obj.first_name,
        last_name : obj.last_name,
        email: obj.email,
        password : obj.password,
        birthday: obj.birthday
    })
    return data
}

const updateUser = () => {
    
}

const deleteUser = () => {
    
}


module.exports ={
    findAllUsers,
    findUserById,
    createUser
}