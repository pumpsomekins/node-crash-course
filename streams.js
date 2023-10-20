const fs= require('fs');

const readStream = fs.createReadStream("./docs/blogs3.txt", { encoding: 'uft8'});
const writeStream = fs.createWriteStream('..docs/blog4.txt');

readStream.on('data', (chunk) => {
    console.log('----- New Chunk -----');
    console.log(chunk);
    writeStream.write('\nNew Chunk\n');
    writeStream.write(chunk);
});

// piping the same content to another file
readStream.pipe(writeStream);

