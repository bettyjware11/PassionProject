// Express and router allows you to use router.get/post/etc
var express = require('express');
var router = express.Router();

// Grabbing model to allow you to use Mongoose database functions like find and create
var ExoticStyleUserCollection = require('../models/ExoticStyleUserSchema');

// const multer = require ('multer');
// const upload = multer ({destination: 'uploads/'});




/* Go to the root ('/') of this router group (exoticStyles) and using GET. In the client you'll have to fetch '/hairstyles' with the default GET request */
router.get('/', function(req, res, next) {

    // We're calling our schema variable so we can use .find. There's no collection in here so it'll ask for everything in the database
    ExoticStyleUserCollection.find((errors, results)=>{
        // If there was some sort of error in finding something, run this error
        if(errors) res.send(errors);
        // If everything went alright, send the results of the find function (all entries in the database)
        else res.render(results);
        process.nextTick(find);
    });
});

/* Go to the root ('/') of this router group (movies) and using POST. In the client you'll have to fetch '/movies' with the POST method */
router.post('/', (req, res, next)=> {
    // We're calling our schema variable so we can use .create function. You can use req.body if all of the information in your body of your fetch in React as the EXACT same names as your schema in your database. Otherwise you should use a collection here.
    ExoticStyleUserCollection.create(req.body, (errors, results)=>{
        // If there was some sort of error in finding something, run this error
        if(errors) res.send(errors);
        // If everything went alright, send the new collection through the results variable
        else res.send("Added!!!!");
    });
});

router.get('/edit/:id', (req, res)=>{
    ExoticStyleUserCollection.findOne({_id: req.params.id}, (errors, results)=>{
        if (errors) res.send(errors);
        else res.send(results);
    })
});

router.put('/', (req, res)=>{
    ExoticStyleUserCollection.updateOne({_id: req.body._id},
        req.body, (errors)=>{
            if (errors) res.send(errors);
            else res.send("Updated!!!");
        });
});

//results = user object array. Map array for each user THEN map each user for styles
router.get('/grabExoticStyles', (req, res) => {
    ExoticStyleUserCollection.findOne({username: req.session.username}, (errors, results)=>{
        if(results){ return res.send(results); }
        else {return res.send({message: "Didn't find a user!!!"})}
    })
});


router.post('/addStyle', (req, res) => {
    ExoticStyleUserCollection.findOneAndUpdate({username: req.body.username},
        {$push: {exoticStyleDetails: req.body.exoticStyleDetails}}, (errors, results) => {
            if (errors) res.send(errors);
            else res.send("Exotic Style Added");
        });
});

//edit style
router.post('/editStyle/:id/:styleId', (req, res) => {
    ExoticStyleUserCollection.updateOne({_id: req.params.id, "exoticStyleDetails._id": req.params.exoticStyleId},
        {
            $set: {
                // "exoticStyleDetails.$.styleName": req.body.styleName,
                "exoticStyleDetails.$.styleImage": req.body.styleImage,
                "exoticStyleDetails.$.uniqueColorMix": req.body.uniqueColorMix,
                "exoticStyleDetails.$.styleColor": req.body.styleColor,
                "exoticStyleDetails.$.comments": req.body.comments,

            }
        }, (errors) => {
            if (errors) res.send(errors);
            else {
                res.send('Exotic Style updated')
            }
        });
});





//search styles
// router.post('/searchExoticStyles', (req, res) => {
//     ExoticStyleUserCollection.find(
//         {"exoticStyles.styleName": {"$regex": req.body.searchBar, "$options": "i"}}, (errors, results) => {
//             if (errors) res.send(errors);
//             else {
//                 let resultsArray = [];
//                 let sendArray = [];
//                 for (let i = 0; i < results.length; i++) {
//                     for (let j = 0; j < results[i].exoticStyles.length; j++) {
//
//                         resultsArray.push(
//                             {
//                                 styleName:results[i].exoticStyles[j].styleName,
//                                 styleImage:results[i].exoticStyles[j].styleImage,
//                                 uniqueColorMix:results[i].exoticStyles[j].uniqueColorMix,
//                                 styleColor:results[i].exoticStyles[j].styleColor,
//                                 comments:results[i].exoticStyles[j].comments,
//                             }
//                         )
//                     }
//                 }
//                 for(let i=0; i<resultsArray.length; i++){
//                     if(resultsArray[i].styleName.includes(req.body.searchBar)){
//                         sendArray.push(resultsArray[i])
//                     }
//                 }
//                 res.send(sendArray);
//             }
//         })
// });

//grab user
// router.post('/searchUsers', (req, res) => {
//     ExoticStyleUserCollection.findOne({username: req.body.username}, (errors, results) => {
//         if (errors) res.send(errors);
//         else {
//             res.send(results);
//         }
//     })
// });

// ******************************************
// ******   How to protect routes   *********
// ******************************************

/* GET Home Page */
// router.get('/home', isAuthenticated, function(req, res){
//     res.render('home', { user: req.user });
// });

// // As with any middleware it is quintessential to call next()
// // if the user is authenticated
// var isAuthenticated = function (req, res, next) {
//     if (req.isAuthenticated())
//         return next();
//     res.redirect('/');
// };



// Allow you to call this exoticStyle group route in your app.js file.
module.exports = router;



















