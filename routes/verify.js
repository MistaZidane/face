/**
 * The Verify Router
    * @author Ntokungwia Zidane
    * @date 8 october 2020
    * Contributors : ,
   **/

const express = require('express');
const router = express.Router();

const jsonSaver = require('../utils/json');

router.get('/:callback', (req, res,next) => {
    jsonSaver.add({name:'dfsd',callback:req.params.callback})
    res.render('pages/verify');
  
});



module.exports = router;