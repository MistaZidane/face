/**
 * The Verify Router
    * @author Ntokungwia Zidane
    * @date 8 october 2020
    * Contributors : ,
   **/

  const express = require('express');
  const router = express.Router();
  const jsonSaver = require('../utils/json');

  router.get('/:callback/:name', (req, res) => {
      console.log(req.params);
      jsonSaver.addRegister({callback:req.params.callback});
      res.render('pages/register',{name:req.params.name});
  });
  
  module.exports = router;