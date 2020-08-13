// file system
const fs = require('fs')
const path = require('path')


//async methods: second param is callback function (in node first param is error)
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if(err){
//         throw err
//     }
//     console.log('Directory is created')
// })

const filepath = path.join(__dirname, 'test', 'test.txt')
fs.writeFile(filepath, 'Hello NodeJS!!!', err => {
    if(err){
        throw err
    }
    console.log('File is created')
})
