const express = require("express");
const app = express();
const port = 8080;

console.dir(app);

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});

// app.use((req, res) => {
//     console.log("request received");
//     // console.log(req);    ------------for the request object..

//     // res.send("my name is the samarth upadhyay");    
//     // res.send([1, 2, 3, 4, 5]);    //------------for the response in the form of the array..
//     // res.send({name : "samarth upadhyay" , designation : "web developer"});    //------------for the response in the form of the object..

// });


// here, we are going to use routing in express---------
// root path--
app.get("/", (req, res) =>{
    res.send("welcome to the root path");
});
// spacefic path--
app.get("/apple", (req, res) =>{
    res.send("welcome to the apple path");
});

// universe path--
app.get("*", (req, res) =>{
    res.send("this path is does`nt exist");
});

// post path--

app.post("/", (req, res) => {
    res.send("welcome to the post request");
    
})