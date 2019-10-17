const http = require('http');

http.createServer((req,res) => {
    
    res.writeHead(200,{'Content-Type': 'Application/json'});
    
    let output = {
        name: 'rayser',
        age: 31,
        uri: req.url
        
    }
    
    res.write(JSON.stringify(output))
//     res.write('hola mundo');
    res.end();
    
    
}).listen(8080);


console.log('Escuchando el puerto 8080')
