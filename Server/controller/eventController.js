var fs = require('fs');

exports.homePage = (req,res) =>{
    res.render('index');
}

exports.addEvent = (req,res) => {
    res.send({data:'save successfully'});
}