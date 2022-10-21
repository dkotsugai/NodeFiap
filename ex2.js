import fs from 'fs';

const dir = './upload';

if (!fs.existsSync(dir)) {
    console.log('Creating directory');
    fs.mkdir(dir, (err) => {
        console.log('Directory created');
    });     
    
} else{
    console.log('Acessamos o diretório', dir);
}

let msg = 'O segundo melhor time de basquete da história é o Lakers';
let file = 'lakers.txt';
let path = `${dir}/${file}`;

if (!fs.existsSync(path)) {
    fs.writeFile(path, msg, () => {
        console.log('Arquivo criado com sucesso!')
    });
    ;
} else {
    console.log(err);
}