//wrapper function
//function(__dirname ,__filename) {

//az elérésí útvonal
    console.log(__dirname); //Az aktuális könyvtár nevét írja ki
    console.log(__filename); //Az aktuális fájl nevét is kiírja 

    //abszolút és relatív elérési útvonal - relatív -- ""....valami...=", abszolút pl.: "D:\\....valami.." - weben csak abszolút elérési útvonalat használunk

//}

require('./calculator.js')
console.log(add(2,3));

require('http');

const http = require('http');

const server = http.createServer(function(req, res){
 res.writeHead(200);
 res.end("Hello World!");
});

server.lister(8080);

