const mongoose=require('mongoose')

const datamodel=mongoose.Schema({
    arr:{
        type:Array
    },
    obj:{
        type:Object
    },
    str:{
        type:String
    }
})
mongoose.model('test',datamodel)