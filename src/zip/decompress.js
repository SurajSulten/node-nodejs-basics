const decompress = async () => {
    const fs = require('fs');
    const zlib = require('zlib');

    const readStream = fs.createReadStream('archive.gz');
    const gunzip = zlib.createGunzip();
    const writeStream = fs.createWriteStream('fileToCompress.txt');

    readStream.pipe(gunzip).pipe(writeStream);

};

await decompress();