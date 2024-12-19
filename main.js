const fs = require('fs');
const path = require('path')
let txt = 'Hello';
let txt2 = 'World';

fs.readFile('task1.txt', 'utf8', (err, banana) => {
    let words = banana
    let wordArray = words.split(" ");
    let pos = wordArray.indexOf('banana');
    console.log(wordArray[pos + 1]); 
});

// Creating 2 file
fs.writeFileSync('file1.txt', txt);
fs.writeFileSync('file2.txt', txt2);

// Reading those 2 files
fs.readFile('file1.txt', 'utf8', (err, data) =>{
    txt = data;
});
fs.readFile('file2.txt', 'utf8', (err, data2) =>{
    txt2 = data2;
});

// Merging two files
const merged = (txt + ' ' + txt2);
fs.writeFileSync('merged.txt', merged);
// Read and log two files
fs.readFile('merged.txt', 'utf8', (err, data3) =>{
    console.log(data3);
});

// Read directory
fs.readdirSync('./').forEach(file => {
    console.log(file);
    return;
});
const directory = './'

fs.rm((directory), { recursive:true }, (err) => { 
    if(err){ 
        console.error(err.message); 
    } 
    console.log("File deleted successfully"); 
})