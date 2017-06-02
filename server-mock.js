const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const fs = require('fs');
const fakerdb = require('./server-mock/generate')();
let router;

fs.writeFile("./server-mock/db.json", JSON.stringify(fakerdb), 'utf8', function(err) {
    if(err) {
        return console.log(err);
    }

    router = jsonServer.router('server-mock/db.json');
    server.use(middlewares);
    server.use(router);
    server.listen(3030, () => {
        console.log('JSON Server is running');
    });

    console.log("The file with fake data was saved!");
});


