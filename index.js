const chalk = require('chalk')
const text = require('./data')


console.log(chalk.blue('Hello NodeJS'))
console.log(chalk.blue(text)) //from my module
console.log(__dirname)
console.log(__filename)

// each module is wrapped by function:
// (function( exports, require, module, __dirname, __filename) {
//      const chalk = require('chalk')
//      const text = require('./data')
//
//      console.log(chalk.blue('Hello NodeJS'))
//      console.log(chalk.blue(text))
//}
