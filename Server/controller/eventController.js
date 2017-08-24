var fs = require('fs');

exports.homePage = (req,res) =>{
    res.render('index');
}

exports.addPage = (req,res) => {
    res.send('Its works');
}