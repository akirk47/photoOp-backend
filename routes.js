var express = require('express');
var router = express.Router();
const databaseFunctions= require('./databaseFunctions')


router.post('/saveNewUser', async (req, res) => {

  try {
    console.log("entered route");
    if(req.body.password !== req.body.confirmPassword){
      res.json({message: "passwords dont match!"});
    }
    else{
      await databaseFunctions.saveUser(req.body.phoneNumber, req.body.password);
      res.json({ message: "success" });
    }
  }
  catch(error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router;
