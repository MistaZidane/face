const request = require('request');
const axios = require('axios');
const https = require('https')
const fs = require('fs');
const path = require('path');
var FormData = require('form-data');
const formidable = require('formidable');

const verifyModel = require('../models/verifyModel');
// request the data from third party API

module.exports.Verify = (req, res) => {
    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
        if (err) {
            return;
        }
        else {
            let file = fs.createReadStream(files.image.path);
            file.on('data', (data) => {
                // console.log(data)
            });
            file.on('end', function () {
                let saver = new verifyModel({name:'Mista Zidane', transctionId:"13435465rdfgreher"});
                saver.save((err,doc)=>{
                    if(err){}
                    else{
                       // console.log(doc)
                    }
                })
                const form_data = new FormData();
                form_data.append("image", file);
     
     
     
     
     
     
     
     
     
     
     
                // axios({
                //     url: `https://immense-shore-43563.herokuapp.com/api/verify`,
                //     method: "post",
                //     data: form_data,
                //     headers: {
                //         "Content-Type": "multipart/form-data",
                //         "name":"Mista"
                //     },
                // }).then(function (response ) {
                //         res.send(response);
                //        console.log(response)
                //     }).catch(function (err ) {
                //         //handle error
                //         res.send(err);
                //         console.log(err);
                //     });


                // axios.post("https://immense-shore-43563.herokuapp.com/api/verify", {
                //     headers: {
                //         "Content-Type": "multipart/form-data",
                //         "name": `"${req.headers.name} "`
                //     },
                // data: form_data
                // }).then((dd)=>{
                //     res.send(dd)
                // }).catch((ff)=>{
                //     console.log(ff);
                //     res.send(ff)
                // });



                //  res.send(files)
                // request({
                //     method: 'post', uri: 'https://immense-shore-43563.herokuapp.com/api/verify', 
                // //    body: form_data
                // }, function (error, resp, body) {
                //     // if the response is an error, display the error page
                //     if (error) {
                //      res.send(error)
                //     }
                //     // otherwise render the home page with the fetched data
                //     else {
                //         // console.log(resp);
                //         res.send(files)
                //         // res.render('pages/home', { kings: JSON.parse(body) });
                //     }
                // }
                // );


                //  axios.post('https://immense-shore-43563.herokuapp.com/api/verify', {
                //    // data: form_data      
                //  })
                //  .then(response => {
                //  res.send(response)
                //  })
                //  .catch(error => {
                //    res.send("error")
                //  })
            });
        }

    });
}
