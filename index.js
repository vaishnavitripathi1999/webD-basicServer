

//requiring the server
const http =require('http');
//initiallizing th port 
const port = 8000;



function reqHandler(req,res){
    console.log(req.url);
};

//creating the server
const server = http.createServer(reqHandler);


//telling the port ot listen on the server and telling the error
server.listen(port,function(err){

    if(err){
        console.log('err');
        return;
    }

    console.log('the server is running on port',port );

})
