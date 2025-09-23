const fs = require('fs');
const{promisify} = require('util');
const readFilePromise = promisify(fs.readFile);

const lireNotesAsyncAwait = async () => {
    try{
        const dataBuffer = await readFilePromise("notes.json");
        const dataStr = dataBuffer.toString();
        return JSON.parse(dataStr);
    }catch(err) {return []}
}

const lireNotesPromise = () => {
    readFilePromise("notes.json")
    .then(dataBuffer => {
        const dataStr = dataBuffer.toString();
        return JSON.parse(dataStr);
    })
    .catch(err=>{return []})
}

const lireNotesCallback = (callback) => {
    fs.readFile("notes.json", (err, dataBuffer) => { // ERROR FIRST 
        if(err) {
        callback(err, []);
        }else{
            const dataStr = dataBuffertaBuffer.toString();
            const notes = JSON.parse(dataStr);
            callback(null, notes);
        }
    })
}
module.exports = {lireNotesCallback, lireNotesPromise, lireNotesAsyncAwait};        