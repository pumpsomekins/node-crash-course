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

// delete files
if (fs.existsSync()){
    awdaw;
}