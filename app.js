const http = require('http');
const fs = require('fs');
const port = 3000;


const renderHtml = (res, path) => {
    
    fs.readFile(path +'.html', (err, data) => {

        if(err) {
            res.writeHead(404);
            res.write("File Not Found");
        }else{
            res.write(data);
        }
        
        res.end();
      

    });

}

const server = http.createServer((req, res) => {  

    res.writeHead(200, {
            'Content-Type': 'text/html'
        });


    const url = req.url;
    console.log(url);  


    if(url == '/about'){

        renderHtml(res, 'pages/about');        

    }else if(url == '/contact'){

        renderHtml(res, 'pages/contact');

    }else{

        renderHtml(res, 'pages/index');

    }

  

});


server.listen(port, 'localhost', () => {

    console.log(`listening on port ${port}`);

});


