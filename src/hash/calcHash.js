const calculateHash = async () => {
    const fs = require('fs');
    const crypto = require('crypto');


    const hash = crypto.createHash('sha256');
    const readStream = fs.createReadStream('fileToCalculateHashFor.txt');

    readStream.on('data', (data) => {
        hash.update(data);
    });

    readStream.on('end', () => {
        const sha256Hash = hash.digest('hex');
        console.log(`SHA256 Hash of ${'fileToCalculateHashFor.txt'}: ${sha256Hash}`);
    });

    readStream.on('error', (error) => {
        console.error(`Error reading file: ${error}`);
    });
};

await calculateHash();