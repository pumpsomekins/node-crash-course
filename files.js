const fs = require("fs");

// make directories
if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });

    fs.rmdir('./asset', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('foldered deleted')
    });
}

// write files
fs.writeFile("./docs/how.txt", "howoow", () => {
    console.log('how');
});

// delete files
if (fs.existsSync('./docs/how.txt')){
    fs.unlink('./docs/how.txt', (err) => {
    if (err){
        console.log("file does not exists.");
    }
    console.log('file is deleted');
})
}