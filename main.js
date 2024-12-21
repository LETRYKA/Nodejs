

import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
import axios from 'axios';
import { faker } from '@faker-js/faker';



// QUANT UPDATE
// var qr_svg = qr.image('I love QR!', { type: 'svg' });
// qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));

// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });

// console.log(chalk.green('QR Gen successfully loaded'));
// figlet("QR GENERATOR", function (err, data) {
//     if (err) {
//         console.log("ERROR: failed to show");
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });

// inquirer
//     .prompt([
//         {message: "[!] Enter your name of QR", name: "qrName"},
//         {message: "[?] Enter your QR URL", name:"URL"}
//     ])
//     .then((answers) => {
//         const url = answers.URL;
//         var qr_svg = qr.image('I love QR!', { type: 'svg' });
//         qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
//         })
//     .catch((error) => {
//         throw error;
//     });



// Task Fake User Generator
let aqua = '\x1b[36m%s\x1b[0m'
console.log(aqua,'AQUA');
  
figlet("FAKE GEN", function (err, data) { // ASCII ART
    if (err) {
        console.log("ERROR: failed to show");
        console.dir(err);
        return;
    }
    console.log(data);
});

// Generating Random User IDS
export function createRandomUser() {
    return {
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
    };
}

// Interactive Terminal
let fakeloader = setInterval(function () { // Load 1 second
    inquirer
        .prompt([ // Prompt
            {
                type: 'list',
                name: 'datatype',
                message: 'Select Gen',
                choices: ['[💀] Fake User Generator', '[X] unavailable', '[X] unavailable'],
            },
            { message: "[?] How many entries you want", name: "entries" }
        ])
        .then((answers) => { // Answer
            let ent = parseInt(answers.entries)
            let datatype = answers.datatype
            const users = faker.helpers.multiple(createRandomUser, {
                count: ent,
            });
            if (!Number.isNaN(ent) && datatype === '[💀] Fake User Generator') { // Must be correct Datatype & Entry must be number
                console.log(chalk.green('[🔄] Generating Fake user Data')) // Generating Message
                let fakeloader = setInterval(function () { // 2 Seconds loader
                    console.log(users)
                    clearInterval(fakeloader);
                }, 2000);
            } else {
                console.log(chalk.red('[!] ERROR: (unavailable)')) // Error message
            }
        })

        .catch((error) => {
            throw error;
        })
    clearInterval(fakeloader);
}, 1000);


// const fs = require('fs');
// const path = require('path')
// let txt = 'Hello';
// let txt2 = 'World';

// fs.readFile('task1.txt', 'utf8', (err, banana) => {
//     let words = banana
//     let wordArray = words.split(" ");
//     let pos = wordArray.indexOf('banana');
//     console.log(wordArray[pos + 1]); 
// });

// // Creating 2 file
// fs.writeFileSync('file1.txt', txt);
// fs.writeFileSync('file2.txt', txt2);

// // Reading those 2 files
// fs.readFile('file1.txt', 'utf8', (err, data) =>{
//     txt = data;
// });
// fs.readFile('file2.txt', 'utf8', (err, data2) =>{
//     txt2 = data2;
// });

// // Merging two files
// const merged = (txt + ' ' + txt2);
// fs.writeFileSync('merged.txt', merged);
// // Read and log two filesx
// fs.readFile('merged.txt', 'utf8', (err, data3) =>{
//     console.log(data3);
// });

// // Read directory
// fs.readdirSync('./').forEach(file => {
//     console.log(file);
//     return;
// });
