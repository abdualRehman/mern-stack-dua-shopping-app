const express = require('express');     
const app = express();                  
const bodyParser =  require('body-parser');      
const cors = require('cors');
const mongoose  = require('mongoose');         
const productRoutes = express.Router();         //unknown line
const orderRoutes = express.Router();         //unknown line
const PORT = process.env.PORT || 4000;
const path = require('path');


//for multimedia files
var multer = require('multer')

var customConfig = multer.diskStorage({
    destination:function(req,file, next){
        next(null,'./client/public/images')
    },
    filename:function(req,file,next){
        next(null,file.originalname)
    }
})
var upload = multer({storage: customConfig })

//for file save <pic>
var fs = require('fs')





// meri lines hyn 
let Product = require('./products.modal');
let Orders = require('./OrderDetails')
// let Cart = require('./Cart.Modal')


app.use(bodyParser.json());
app.use(cors());
app.use(express.static('client/build')); //additional server wali line 
app.use(bodyParser.urlencoded({extended:true})) //additional server wali line 



// const db = require('./config/keys').mongoURI
mongoose.connect( process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mernloginreg',{useNewUrlParser:true});
mongoose.connect( process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/orders',{useNewUrlParser:true});  //cart db
mongoose.connect( process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/products',{useNewUrlParser:true});

// mongoose.connect('mongodb://127.0.0.1:27017/users',{useNewUrlParser:true}); //users









// internet wali lines{
// mongoose.connect(db,{useNewUrlParser:true}); //users }

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'DB connection error:'));
connection.once('open', function(){
    console.log("Mongodb connection establish successfully");
})






// // Passport middleware
// app.use(passport.initialize());
// // Passport config
// require("./config/passport")(passport);
// // Routes
// app.use("/api/users", users);




//video wali lines 2

const Users = require('./routes/Users')


app.use('/users',Users);












productRoutes.route('/Products').get( function(req,res){ //create
    Product.find( function(error,product){
        if(error){
            console.log(error)
        }else{
            res.json(product)
        }
    });
});
productRoutes.route('/:id').get(function(req,res) {
    let id = req.params.id;
    // console.log(id)
    Product.findById(id , function(err, product){
        res.json(product)
        console.log(product)
    });
});

productRoutes.route('/add').post(function(req,res){

    // upload.array('profilePicture',10)
    // ,function ( req,res,next){
    // console.log(req.file)
    // res.send(req.file)
    // }


    console.log(req.body)
    let product = new Product( req.body );
    product.save()
    .then(product =>{
        res.status(200).json({'product':'product added successfully'})
    })
    .catch(err =>{
        res.status(400).send('adding new product failed')
    });

});
productRoutes.route('/update/:id').post(function(req,res){
    Product.findById(req.params.id, function(err,product){
        if(!product)
            res.status(404).send('data is not found')
        else
            product.name = req.body.name;
            product.src = req.body.src;
            product.size = req.body.size;
            product.description = req.body.description;
            product.colour = req.body.colour;
            product.price = req.body.price;


            product.save()
                .then(product =>{
                    res.json('Product Updated')
                })
                .catch(err =>{
                    res.status(400).send("Update is not possible");
                });
    });
});

app.use('/products',productRoutes); //no 2


//delete product
app.delete('/deleteProduct/:id',(req,res)=>{
    // console.log(req.params.id);
    Product.deleteMany({
        _id:req.params.id
    })
    .exec(function(err,del){
        if(err){
            return res.json({ success: false, err: err })
        }
        Product.find({})
        .exec(function(err,product){
            if(err){
                return res.json({ success: false, err: err })
            }
            res.json({ success: true, data: product, no:del })
        });
    });

});

//order details

orderRoutes.route('/Orders').get( function(req,res){ //create
    Orders.find( function(error,order){
        if(error){
            console.log(error)
        }else{
            res.json(order)
        }   
    });
});
orderRoutes.route('/:id').get(function(req,res) {
    let id = req.params.id;
    // console.log(id)
    Orders.findById(id , function(err, order){
        res.json(order)
        console.log(order)
    });
});

orderRoutes.route('/addOrder').post(function(req,res){
    console.log(req.body)
    let order = new Orders( req.body );
    order.save()
    .then(order =>{
        res.status(200).json({'product':'product added successfully'})
    })
    .catch(err =>{
        res.status(400).send('adding new product failed')
    });

});
app.use('/orders',orderRoutes);

app.delete('/deleteOrder/:id',(req,res)=>{
    Orders.deleteMany({
        _id:req.params.id
    })
    .exec(function(err,del){
        if(err){
            return res.json({ success: false, err: err })
        }
        Orders.find({})
        .exec(function(err,order){
            if(err){
                return res.json({ success: false, err: err })
            }
            res.json({ success: true, data: order, no:del })
        });
    });
})





// for send a pic to server
app.post('/profile',upload.array('profilePicture',10)
,function ( req,res,next){
    console.log(req.file)
    res.send("file uploaded")
}
)





if (process.env.NODE_ENV === 'production' ){
    app.use(express.static( 'client/build' ))

    app.get('*',( req, res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html')); //related path

    });
}







// app.use((err, req, res, next) => {
//     console.warn(err)
//     res.status(500).send("Error Catched by error handler.")
// })


app.listen(PORT,function(){
    console.log("Server is Runing on Port: " + PORT);
});

