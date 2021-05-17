const Blog = require('../models/blogSchema');

module.exports.contribute = function(req,res){
    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{
        res.send(result);
    })
    .catch((error)=>{
        res.send(error.message);
    })
}

module.exports.blogs = function(req,res){
    // const blogs = {};
    Blog.find({},(err,blog)=>{
        if(err){
            console.log('error fetching data');
            return;
        }
        res.render('community',{title:"Bookly | Community",blogs:blog});
    });
}