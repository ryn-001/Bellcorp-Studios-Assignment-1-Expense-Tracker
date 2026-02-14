const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

userSchema.pre('save', async function (){
    try{
        if(!this.isModified('password')) return;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);

        this.password = hashedPassword;
        return;
    }catch(err){
        return err;
    }
})

userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password,this.password);
}

const User = mongoose.model('users', userSchema);
module.exports = User;