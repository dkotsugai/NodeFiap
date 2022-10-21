import fs from 'fs';

const dir = './upload';

if (!fs.existsSync(dir)) {
    console.log('Creating directory');
    fs.mkdirSync(dir);
    setTimeout(
        () => {
        console.log('------------------');
        console.log('Directory created');
    }, 1000);    
} else{
    console.log('Acessamos o diretório', dir);
}

let msg = 'O melhor time de basquete da história é o Golden State Warriors';
let file = 'warriors.txt';
let path = `${dir}/${file}`;

if (!fs.existsSync(path)) {
    fs.writeFileSync(path, msg);
    console.log('Arquivo criado com sucesso!');
} else {
    console.log('Arquivo já existe');
}