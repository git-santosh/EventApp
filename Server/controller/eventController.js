var fs = require('fs');
const mongoose = require('mongoose');
const Event = mongoose.model('Event');
exports.homePage = (req,res) =>{
    res.render('index');
}
exports.addEvent = (req,res) => {
    const event = new Event(req.body);
    event.save().then(event =>{
         res.send({success:true,data:'save successfully'});
    }).catch(err =>{
        return res.status(401).send({success:false,data: err});
    })
   
}