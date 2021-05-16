module.exports.osNotes = function(req,res){
    res.render('os',{title:'Operating-System'})
}

module.exports.alNotes = function(req,res){
    res.render('al',{title:'Algorithms'})
}

module.exports.dbNotes = function(req,res){
    res.render('db',{title:'database'});
}

module.exports.dsNotes = function(req,res){
    res.render('ds',{title:'data structures'});
}
module.exports.cgNotes = function(req,res){
    res.render('cg',{title:'computer graphics'});
}