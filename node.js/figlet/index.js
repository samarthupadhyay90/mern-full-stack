const figlet = require('figlet');
figlet("hii, i am samarth upadhyay and i am a coder", function(err, data){
    if(err){
        console.log("something went wrong......");
        console.dir(err);
        return;

    }
    console.log(data);

});
