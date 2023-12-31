const { constants } = require("../constant");

const errorHandler = (err, req, res) => {
const statusCode = res.statusCode ?  res.statusCode:  500;
switch (statusCode) {
    case constants.VALIDATION_ERROR: 
    res.json ({title  : "validation failed" , message :err.message, stackTrace:err.stackTrace})
    case constants.NOT_FOUND: 
    res.json ({title  : "not found " , message :err.message, stackTrace:err.stackTrace})
    case constants.UNAUTHORIZED: 
    res.json ({title  : "un authorized error" , message :err.message, stackTrace:err.stackTrace})
    case constants.SERVER_ERROR: 
    res.json({title : "server error" , message :  err.message, stackTrace:err.stackTrace})
    default:
        break
}

}

module.exports = errorHandler