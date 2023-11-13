const mongoose = require('mongoose');

const CoreCommitteeSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    MembershipID:{
        type:Number,
        unique:true,
        required:true

    },
    Designation:{
        type:String,
        required:true

    },
    Email:{
        type:String,
        required:true

    },
    Phone:{
        type:String,
        required:true

    }
});

const MembersSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true

    },
    MembershipID:{
        type:Number,
        required:true,
        unique:true

    },
    Role:{
        type:String,
        required:true

    },
    Phone:{
        type:String,
        required:true

    },
    type:{
        type:String,
        required:true

    }
});

const intrestedCanditatesSchema = mongoose.Schema(
    {
    Name:{
        type: String,
        required:[true,'Please provide your name']
    },
    RollNumber:{
        type: String,
        required:true

    },
    Department: {
        type: String,
        required:true

    },
    Year:{
        type: String,
        required:true
    },
    Phone:{
        type:Number,
        required:true,
        unique:true
    }
}
);

const notificationSchema = mongoose.Schema(
    {
        Phone:{
            type: Number,
            unique: true,
            required:true
        }
    }
) 

module.exports = {
    CoreCommitteeSchema,
    MembersSchema,
    intrestedCanditatesSchema,
    notificationSchema
};

