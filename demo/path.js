const path = require('path')

console.log('Filename:', path.basename(__filename))
console.log('Directory name:', path.dirname(__dirname))
console.log('File extension:', path.extname(__filename))
console.log('Parse:', path.parse(__filename))
console.log(path.join(__dirname, 'server', 'index.html'))//if need to make path:
//                     /home/lena/IdeaProjects/node-first/demo/server/index.html
