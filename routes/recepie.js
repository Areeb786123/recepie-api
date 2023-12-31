const express = require ("express");
const router = express.Router();
const {getAllRecepies,
    updateRecepie, 
    deleteRecepie, getRecepieById , 
    createRecepie
} = require("../controllers/recepieControllers")


router.route("/").get(getAllRecepies).post(createRecepie)
router.route("/:id").get(getRecepieById).delete(deleteRecepie).put(updateRecepie) 


module.exports = router;