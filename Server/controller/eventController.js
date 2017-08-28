var fs = require('fs');
const mongoose = require('mongoose');
const Event = mongoose.model('Event');
exports.homePage = (req,res) =>{
    res.render('index');
}
exports.addEvent = (req,res) => {
    const event = new Event(req.body);
    Event.create(event,function(err,data){
        if(err){
            return res.status(401).send({success:false,data:err});
        }
         res.send({success:true,data:'save successfully'});
    })
   
}