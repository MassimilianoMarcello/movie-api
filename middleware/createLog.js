import chalk from 'chalk';
import { fs, path, PATH } from '../utils/fileSystem.js';


const createLog = (req,res,next)=>{
  const {method,url}= req
//   console.log(`${method} : ${url}`);
const now = new Date()
const year = now.getFullYear()
let month = now.getMonth() +1
let day = now.getDate()
let hours = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()

month = month<10 ? `0${month}`: month
day = day<10 ? `0${day}`: day
hours = hours<10 ? `0${hours}`: hours
minutes = minutes<10 ? `0${minutes}`: minutes
seconds = seconds<10 ? `0${seconds}`: seconds

const message = `${chalk.blueBright(year)}-${chalk.blueBright(month)}-${chalk.blueBright(day)}--- ${chalk.redBright(hours)} ${minutes}- ${seconds} ---- ${method}  ---- ${url}`
const log=`${year}-${month}-${day}--- ${hours} ${minutes}- ${seconds} ---- ${method}  ---- ${url}`

console.log(message);
fs.appendFile(path.join(PATH, '..','logs','logs.txt'),log,(err)=>{
    if(err){
        console.error(err);
    }
})
    next();

}

export default createLog



