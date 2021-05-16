module.exports.operatingSys = function(req,res){
    res.render('home',{title:'Operating-System'})
}

module.exports.notesHome = function(req,res){
    res.end('<h1>Hello there</h1>')
}

module.exports.dbNotes = function(req,res){
    res.render('db',{title:'database'});
}