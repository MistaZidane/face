/**
 * The Verify Router
    * @author Ntokungwia Zidane
    * @date 8 october 2020
    * Contributors : ,
   **/

  const express = require('express');
  const router = express.Router();
  const jsonSaver = require('../utils/json');

  router.get('/:callback', (req, res) => {
      console.log(req.params);
      
      jsonSaver.addDelete({callback:req.params.callback});
      res.render('pages/delete');
  });
  
  module.exports = router;