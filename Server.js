const http = require('http')
const fs = require('fs')

const port = 8080;


const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html')

    if(req.url=='/'){
        res.statusCode=200;
        let page = fs.readFileSync('index.html');
        res.end(page.toString())
    }
    else if(req.url=='/about'){
        res.statusCode=200;
        let page = fs.readFileSync('about.html');
        res.end(page.toString())
    }
    else if(req.url=='/contact-me'){
        res.statusCode=200
        let page = fs.readFileSync('contact-me.html')
        res.end(page.toString())
    }
    else if(req.url=='/goToAbout'){
        res.statusCode=200;
        let page = fs.readFileSync('about.html');
        res.end(page.toString())
    }
    else if(req.url=='/goToContact'){
        res.statusCode=200
        let page = fs.readFileSync('contact-me.html')
        res.end(page.toString())
    }
    // else if(req.url=='/backButton'){
    //     res.statusCode=200;
    //     let page = fs.readFileSync('index.html');
    //     res.end(page.toString())
    // }
    else{
        res.statusCode = 404
        let page = fs.readFileSync('404.html')
        res.end(page.toString())
    }
})

server.listen(port, ()=>{
    console.log(`Server listening to port: ${port}`)
})
