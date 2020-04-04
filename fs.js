const fs = require('fs');

// let read = fs.readFileSync('./readme.txt', 'utf8');
// fs.writeFileSync('writeme.txt', read);
// fs.rmdirSync('mydirectorate');


// fs.mkdir('directorate2', () => {
//    fs.readFile('./readme.txt', 'utf8', (err, data) => {
//        fs.writeFile('./directorate2/newfile.txt', data);
//    });
// });

fs.unlink('./directorate2/newfile.txt', ()=> {
    fs.rmdir('directorate2');
});