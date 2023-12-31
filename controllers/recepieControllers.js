/** 
 * desc Get all reeceie
 * GET request
 * **/
const asyncHandler= require("express-async-handler")
const ReceipeModel =require("../models/recepiemodel");

const getAllRecepies =  asyncHandler(async(req, res) => {
    const recepie = await ReceipeModel.find();
    res.status(200).json(recepie)
})

/** 
 * desc post reeceie
 * POST request
 * **/

const createRecepie = asyncHandler( async(req, res) => {
    const  {title ,description, steps} =  req.body
    if(!title) {
        res.status(400);
        throw new Error("title is necessory")
    }

    if(!steps) {
        res.status(400)
        throw new Error ("steps are necessory")
    }
    const recepie =  await ReceipeModel.create({
        title,
        description,
        steps
    })
    console.log(recepie)
    res.status(200).json(recepie)
})
/** 
 * desc delete
 * DELETE request
 * **/

const deleteRecepie =  asyncHandler (async(req, res) => {
    const recepie = await ReceipeModel.findById(req.params.id)
    if(!recepie) {
        res.status(404)
        throw new Error("recepie not found")
    }

    await ReceipeModel.deleteOne({_id: req.params.id})
    res.status(200).json(recepie)
})
/** 
 * desc update all reeceie
 * Update request
 * **/

const updateRecepie =asyncHandler( async(req, res) => {
    const recepie = await ReceipeModel.findById(req.params.id)

    if(!recepie) {
        res.status(404)
        throw new Error("receipe not found")
    }

    res.status(200).json({message: `put${req.params.id}`})

})
/** 
 * desc Get all recepie by id 
 * GET request
 * **/

const getRecepieById = asyncHandler( async(req, res) => {
    const recepie =  await ReceipeModel.findById(req.params.id)
    if(!recepie) {
        res.status(404);
        throw new Error("accound not found")
    }
       res.status(200).json(recepie)
} )

module.exports = {getAllRecepies, createRecepie , deleteRecepie, updateRecepie, getRecepieById}