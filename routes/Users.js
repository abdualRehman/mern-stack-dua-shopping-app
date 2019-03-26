const express = require('express');  
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/User");
users.use(cors());

process.env.SECRET_KEY = 'secret'

users.post('/register',(req,res)=>{
    const today = new Date()
    const userData = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        password : req.body.password,
        created:today
    }
        // console.log(userData)
    User.findOne({
        email:req.body.email
    })
    .then(user =>{
        // console.log(user._id)
        // if(user.email=== userData.email ){
        //     res.json('Your Email is Already Exist')
        //     return console.log("email same")
        // }else{
        //     bcrypt.hash(req.body.password,10,( err , hash ) => {
        //         userData.password = hash
        //         User.create(userData)
        //         .then( user=> {
        //             res.json({status:user.email + 'registerged!'})
        //         })
        //         .catch(err =>{
        //             res.send('error:'+ err)
        //         })
        //     })
        

        // }


        if(!user){
            bcrypt.hash(req.body.password,10,( err , hash ) => {
                userData.password = hash
                User.create(userData)
                .then( user=> {
                    res.json({status:user.email + 'registerged!'})
                })
                .catch(err =>{
                    res.send('error:'+ err)
                })
            })
        }else{
            res.json('User alredy exists')
        }

    })
    .catch(err =>{
        res.send( 'error'+ err)
    })
})

users.post('/login',(req,res)=>{
    User.findOne({
        email:req.body.email
    })
    .then(user =>{
        if(user){
            if(bcrypt.compareSync(req.body.password,user.password)){
                const payload = {
                        _id : user._id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email
                }
                let token = jwt.sign(payload,process.env.SECRET_KEY , {
                    expiresIn:  1440
                })
                res.send(token)
            }
            else{
                res.json({error:"User does not exist"})
            }
        }else{
            res.json({error:"User does not exist"})
        }
    })
    .catch(err =>{
        res.send('error: ' +err);
    })
})

users.get('/profile' ,(req,res)=>{
    var decoded = jwt.verify(req.header['authorization'] ,process.env.SECRET_KEY)

    User.findOne({
        _id: decoded._id,
    })
    .then(user =>{
        if(user){
            res.json(user)
        }else{
            res.send("User does not exist")
        }
    })
    .catch(err =>{
        res.send('error: '+ err)
    })
})

users.post('/carts',(req,res)=>{
    const cartData = {
        name:req.body.name,
        price:req.body.price,
        size: req.body.size,
        src:req.body.src,
    }
    User.findOne({
        email:req.body.email
    })
    .then(user =>{
        if(user){
            // const carts = user.carts
            // console.log(carts)
            // user.remove({carts},true)

            user.update(  {$push: {carts: cartData}},
                {safe: true, upsert: true},
                function(err, doc) {
                    if(err){
                    console.log(err);
                    }else{
                    //do stuff
                    // console.log(doc.carts)
                    }
                }
            )

            // user.update(  {$push: {carts: cartData}},
            //     {safe: true, upsert: true},
            //     function(err, doc) {
            //         if(err){
            //         console.log(err);
            //         }else{
            //         //do stuff
            //         // console.log(doc.carts)
            //         }
            //     })
        }



            // const carts =  user.carts;
            // carts.push(cartData.cart)
            // console.log(cartData)
    })
    .catch(err=>{
        res.send( 'error'+ err)
    })

})
// users.get('/:id',(req,res)=>{
//     let email = req.params.email
//     User.findOne({
//         email : email,
//     }).then(user =>{
//         res.json(user)
//     })

// })
users.post('/viewCarts',(req,res)=>{
    const email = req.body.email;
    // console.log(req.body.email)
    User.find({
        email : req.body.email
    }).exec(function(err,user){
        if (err) {
            return res.json({ success: false, err: err })
        }
        res.json({ success: true, data: user })
      })
})

users.post('/deleteOne',(req,res)=>{
    const cartDetails ={
        name:req.body.name,
        price:req.body.price,
        size:req.body.size
    }
    User.findOne({
        email:req.body.email
    }).then(user =>{
        if(user){
            user.update({$pull: {carts: cartDetails}},
            {safe: true, upsert: true},
            function(err, doc) {
                if(err){
                console.log(err);
                }else{
                //do stuff
                // console.log(doc.carts)
                }
            }

            )
        }
    })
    .catch(err=>{
        res.send( 'error'+ err)
    })

})


users.post('/orderSuccess',(req,res)=>{
    const cartDetail = {
        carts:req.body.carts
    }

    User.findOne({
        email:req.body.email
    }).then(user =>{
        if(user){
            user.update({$set: {carts:[]}},
            {safe: true, upsert: true},
            function(err, doc) {
                if(err){
                console.log(err);
                }else{
                //do stuff
                // console.log(doc.carts)
                }
            }

            )
        }
    })
    .catch(err=>{
        res.send( 'error'+ err)
    })




})









module.exports = users
