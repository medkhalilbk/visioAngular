const mongoose = require("mongoose");
const meetModel = require("../models/meets");

 

exports.getMeetsByUserId = async (req, res) => {
    try {
        const {userId} = req.userData    
    if (userId != req.params.userId) {
        return res.status(500).json({
            success: false,
            message:"Vous n'êtes pas autorisé"
    })    
    }
    const meets = await meetModel.find({
      $or: [{ usersAllowed: { $in: [userId] } } , {createdBy:userId}],
    });
    res.status(200).json({
      success: true,
      data: meets,
    });
    } catch (error) {
        console.log(error)
    res.status(500).json({ error: true, message: "Could not retrieve meets" });
  }
};

    