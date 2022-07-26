const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    usertype:{type:String, enum:["student","faculty","committee"]},
    users:[{
        email:{type:String,required:true},
        password:{type:String,required:true},
        preferences:[{type:String}],
        registered:[{type:String,default:null}],
        committee_name:{type:String}
    }]
});

module.exports = mongoose.model("users",userSchema);