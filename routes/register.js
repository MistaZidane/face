/**
 * The Verify Router
    * @author Ntokungwia Zidane
    * @date 8 october 2020
    * Contributors : ,
   **/

  const express = require('express');
  const router = express.Router();
  const request = require('request');
  const fs = require('fs');
  const path = require('path');
  router.get('/:callback', (req, res) => {
      console.log(req.params);
      res.render('pages/register');
  
      // request the data from third party API
    //   request({
    //       method: 'post', uri: 'https://immense-shore-43563.herokuapp.com/api/verify', headers: {
    //           name: 'Zidane'
    //       },
    //       multipart: [
    //           { body: 'I am an attachment' },
    //          { body:fs.createReadStream(path.join(__dirname + '../../images/test.jpg'))  }
    //         ],
    //   }, function (error, resp, body) {
    //       // if the response is an error, display the error page
    //       if (error) {
    //           res.render('pages/error', { error: err });
    //       }
    //       // otherwise render the home page with the fetched data
    //       else {
    //          // console.log(resp);
    //           res.send(body)
    //           // res.render('pages/home', { kings: JSON.parse(body) });
    //       }
    //   }
    //   );
  });
  
  module.exports = router;