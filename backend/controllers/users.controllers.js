const {UserServices} = require('../services/services.index');

const createUser = async (req, res) => {
    try{
        const {name, email, password, balance} = req.body;
        
        if(!name || !email || !password || balance === undefined) {
            return res.status(400).json({success: false, message: 'All fields are required'});
        }

        const check = await UserServices.getUserByEmail(email);
        if(check) return res.status(400).json({success: false, message: 'Email already exists'});
        
        const user = await UserServices.createUser({name, email, password, balance});
        return res.status(201).json({success: true, message: 'User created successfully', data: user});
    }catch(error){
        return res.status(500).json({success: false, message: 'An error occurred', error: error});
    }
}

const getUser = async (req, res) => {
    try{
        const {email} = req.body;
        
        if(!email) {
            return res.status(400).json({success: false, message: 'Email is required'});
        }

        const user = await UserServices.getUserByEmail(email);
        if(!user) return res.status(404).json({success: false, message: 'User not found'});

        return res.status(200).json({success: true, message: 'User retrieved successfully', data: user});
    }catch(error){
        return res.status(500).json({success: false, message: 'An error occurred', error: error});
    }
}

module.exports = {createUser, getUser};