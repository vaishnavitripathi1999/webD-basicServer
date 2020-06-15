

//requiring the server
const http =require('http');
//initiallizing th port 
const port = 8000;

//creating the server
const server = http.createServer();


//telling the port ot listen on the server and telling the error
server.listen(port,function(err){

    if(err){
        console.log('err');
        return;
    }

    console.log('the server is running on port',port );

})