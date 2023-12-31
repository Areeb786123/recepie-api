const mongoose  = require("mongoose")
const recepieSchema =  mongoose.Schema ( {
    title: {
        type:String, 
        require: [true, "please add title"]
    
    },

    description: {
        type:String
    }, 
    steps :  { 
        type:String,
        require: [true , "steps is necessory"]
    }
})

module.exports = mongoose.model("Recepie" , recepieSchema)