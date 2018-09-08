const http = require('http')

let app = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    })
    let path = req.url
    switch (path) {
        case '/index':
            res.write('<h1>index</h1>')
            break
        case '/login':
            res.write('<h1>login</h1>')
            break
        case '/json':
            res.write(JSON.stringify({
                name: 1
            }))
    }
    // res.end('req done...')
    res.end()
})

app.listen(7000, err => {
    if (!err) return console.log('start sever success')
    throw new Error(err)
})