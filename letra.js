import { randomInt } from 'crypto'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, 'dobasok.txt')

let content

content = fs.readFileSync(filePath, 'utf-8')
console.log("content", content)

let arr = content.split(', ').map(Number)
let sum = 0
let backwards = 0
for(let i = 0; i < arr.length; i++){
    arr[i] += sum
    if(arr[i] % 10 === 0){
        sum -= 3
        backwards++
    }
    sum =+ arr[i]
}
console.log("arr", arr)
console.log(arr.join(' '))

console.log('3. feladat')
console.log(`A játék során ${backwards} alkalommal lépett létrára.`)
console.log('4. feladat')
console.log(arr[arr.length - 1] >= 45 ? 'A játékot befejezte.' : 'A játékot abbahagyta.')
console.log('5. feladat')

content += '\n'
arr = []
for(let i = 0; i < 18 ; i++){
    arr.push(randomInt(1,7))
}
content += arr.join(', ')
try{
    fs.writeFileSync(filePath, content)
}catch(error){
    console.log(error)
}