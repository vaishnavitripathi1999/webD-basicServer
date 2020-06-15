

//requiring the server
const http =require('http');
//initiallizing th port 
const port = 8000;
//for reading a file
const fs= require('fs');



//handling the request res and req 
function reqHandler(req,res){
    console.log(req.url);



//this will read the file 

res.writeHead(200,{'content-type':'text/html'});

let filepath;

switch(req.url){

    case '/' :
        filepath = './inedx.html';
        break;
    
    case '/profile':
        filepath = './profile.html';
        break;

     default:
         filepath = './404.html';
        break;
};

 

 fs.readFile(filepath,function(err,data){

    if(err){
        console.log('error',err);
        return;
    }

    return res.end(data);


 })};

  





//creating the server
const server = http.createServer(reqHandler);


//telling the port ot listen on the server and telling the error
server.listen(port,function(err){

    if(err){
        console.log('err');
        return;
    }

    console.log('the server is running on port',port );

});

