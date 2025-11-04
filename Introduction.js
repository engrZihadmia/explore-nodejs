let os= require('node:os')

let cpu= os.cpus()
let arch=os.arch()
console.log(cpu)
console.log(arch)