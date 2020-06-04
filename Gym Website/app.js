// video 71
// const express = require("express")
// const app = express();
// const port =80;
// app.use('/static',express.static('static'))

// app.get("/",(req,res)=>{
//     res.send("this is my home page of first express app")
// });
// app.get("/about",(req,res)=>{
//     res.send("this is my about page of first express app");
// });
// app.post("/about",(req,res)=>{
//     res.send("this is my about page of first express app");
// });
// app.post("/this",(req,res)=>{
//     res.status(404).send("this is my about page of first express app");
// });

// app.listen(port, ()=>{
//     console.log(`the app started succesfullyon port ${port}`)
// })




// video 72
//require IS THE INBUILT FUNCTION TO INCLUDE THE MODULES THAT EXIT IN THE SEPARTE FILE IN NODE.JS

const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())
// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far, so use it wisely!!"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug', params);
})
app.post('/', (req, res)=>{
    // console.log(req.body)
   name= req.body.name
   age= req.body.age
   gender= req.body.gender
   address= req.body.address
   more= req.body.more
    let outputToWrite = `The name of the client is ${name}, ${age} years old,${gender},residing at ${address}.More about him/her is: ${more}`
   fs.writeFileSync('output.txt',outputToWrite)


    const params = {'message': 'Ypur form has been succesfully submitted'}
    res.status(200).render('index.pug', params);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});


