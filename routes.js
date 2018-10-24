var express = require('express');
var router = express.Router();

router.post('/saveLecture', async (req, res) => {
  // console.log('entered saveLecture')
  // try {
  //   console.log('try', req.user)
  //   var lectureId = await saveFunctions.saveLecture(req.body.classId, req.user, req.body.lectureTitle, req.body.password);
  //   console.log('saveLecture', lectureId)
  //   res.json({ lectureId: lectureId });
  // }
  // catch(error) {
  //   res.status(400).json({ error: error.message })
  // }
})

module.exports = router;
