const path = require('path')

// /Users/liyang/programmer/project/kaikeba/20_node_module_use/views
console.log(path.join(__dirname, 'views'))
    // /Users/liyang/programmer/project/kaikeba/20_node_module_use/views
console.log(path.resolve(__dirname, 'views'))
    // views/views
console.log(path.join('./views', 'views'))
    // /Users/liyang/programmer/project/kaikeba/20_node_module_use/views/views
console.log(path.resolve('./views', 'views'))
    /*
    {
        root: '/',
        dir: '/Users/liyang/programmer/project/kaikeba',
        base: '20_node_module_use',
        ext: '',
        name: '20_node_module_use'
    } 
    */
console.log(path.parse(__dirname))