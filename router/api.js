const express = require('express');
const router = express.Router();
const Student = require('../models/student'); 
//localhost:4000/api/students
// get a list of students from the database
router.get('/students',function(req,res){
    Student.find({})
    .then(function(students){
        res.send(students);
    });
});

// add a new student to database
router.post('/students',function(req,res){
    Student.create(req.body)
    .then(function(student){
        res.send(student);
    });
});

// update a student in the database
router.put('/students/:id',function(req,res){
    Student.findOneAndUpdate({_id: req.params.id},req.body)
    .then(function(student){
        Student.findOne({_id: req.params.id})
        .then(function(student){
            res.send(student);
        });
    });
});

// delete a student in the database
router.delete('/students/:id',function(req,res){
    Student.findOneAndDelete({_id: req.params.id})
    .then(function(student){
        res.send(student);
    });
});

module.exports = router;
