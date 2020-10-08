/**
 * The Verify Router
    * @author Ntokungwia Zidane
    * @date 8 october 2020
    * Contributors : ,
   **/

const express = require('express');
const router = express.Router();

const verifyControler = require('../controllers/Verify');

router.get('/:callback', (req, res) => {
    console.log(req.params);
    res.render('pages/verify');
});
router.post('/',(req,res)=>{
 verifyControler.Verify(req,res);
 console.log("egrht");
})

module.exports = router;