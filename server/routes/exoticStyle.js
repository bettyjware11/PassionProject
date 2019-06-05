// Express and router allows you to use router.get/post/etc
var express = require('express');
var router = express.Router();

// Grabbing model to allow you to use Mongoose database functions like find and create
var ExoticStyleUserCollection = require('../models/ExoticStyleUserSchema');

/* Go to the root ('/') of this router group (exoticStyles) and using GET. In the client you'll have to fetch '/hairstyles' with the default GET request */
router.get('/', function(req, res, next) {

    // We're calling our schema variable so we can use .find. There's no collection in here so it'll ask for everything in the database
    ExoticStyleUserCollection.find({}, (errors, results)=>{
        // If there was some sort of error in finding something, run this error
        if(errors) res.send(errors);
        // If everything went alright, send the results of the find function (all entries in the database)
        else res.render('index',{allEntries:results});
    });
});

//CRUD
router.get("/addStyle", (req, res)=>{
    res.render('addStyle');
});

/* Go to the root ('/') of this router group (exoticStyles) and using POST. In the client you'll have to fetch '/movies' with the POST method */
router.post('/addStyle', function(req, res, next) {
    // We're calling our schema variable so we can use .create function. You can use req.body if all of the information in your body of your fetch in React as the EXACT same names as your schema in your database. Otherwise you should use a collection here.
    ExoticStyleUserCollection.create(req.body, (errors, results)=>{
        // If there was some sort of error in finding something, run this error
        if(errors) res.send(errors);
        // If everything went alright, send the new collection through the results variable
        else res.render('addStyle',{isSent: true});
    });
});
router.route('/delete')
    .get((req, res)=> {
        res.render("delete");
    })
    .post((req,res)=>{
        ExoticStyleUserCollection.deleteOne({id: req.body.id}, (errors, results)=>{
            if(errors) res.send(errors);
            else res.render('delete', {isSent: true});
        });
        // res.send("Deleted!")
    });

router.route('/find')
    .get((req,res)=>{
        res.render("find");
    })
    .post((req,res)=>{
        ExoticStyleUserCollection.findOne({id: req.body.id}, (errors, results)=>{
            if(errors) res.send(errors);
            else{
                res.render('find',{findResults: results});
            }
        });
        // res.send("Found!!!!")
    });

router.get("/edit", (req, res)=>{
    res.render("edit");
});
/* Go to the root ('/') of this router group (exoticStyles) and using GET. In the client you'll have to fetch '/hairstyles' with the default GET request */
router.get('/viewGallery', function(req, res, next) {

    // We're calling our schema variable so we can use .find. There's no collection in here so it'll ask for everything in the database
    ExoticStyleUserCollection.find((errors, results)=>{
        // If there was some sort of error in finding something, run this error
        if(errors) res.send(errors);
        // If everything went alright, send the results of the find function (all entries in the database)
        else res.send(results);
    });
});


// Allow you to call this exoticStyles group route in your app.js file.
module.exports = router;



















module.exports = router;