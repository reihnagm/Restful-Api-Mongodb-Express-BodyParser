const Todos = require('../model/todoModel');

exports.test = function(req, res) {
    res.send("ini udah bener komunikasi antara model controller dan route")
};

exports.create = function(req,res) { 
    let todos = new Todos({
        name: req.body.name,
        done: req.body.done
    });

    console.log(todos);
    todos.save(function(err) {
        if(err)
        {
            return next(err);
        }
        res.send("Succesfully created !");
    });
};   

exports.todoShow = function(req, res) {
    Todos.find({}, function(err, todos) {
        if(err) return next(err); 
        res.send(todos);
    });
};  

exports.todoDetails = function(req, res) {
    Todos.findById(req.params.id, function(err, todos) {
        if(err) return next(err); 
        res.send(todos);
    });
}; 

exports.todoUpdate = function(req, res) {
    Todos.findByIdAndUpdate(req.params.id, 
        {$set: req.body}, 
        function(err, todos) {
        if(err) return next(err);
        res.send("Successfully update !");
    });
};

exports.todoDelete = function(req, res) {
    Todos.findByIdAndDelete(req.params.id, function(err, todos) {
        if(err) return next(err)
        res.send("Succesfully Delete !");
    });
};