module.exports.home = function (req,res){
    res.render('home',{title:'Bookly'})
}

module.exports.osNotes = function (req,res){
    res.render('notes',{title:'Notes'})
}