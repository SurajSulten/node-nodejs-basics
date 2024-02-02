const transform = async () => {
    const { Transform } = require('stream');

    function reverseTransform(chunk, encoding, callback) {
      const reversedChunk = chunk.toString().split('').reverse().join('');
      this.push(reversedChunk);
      callback();
    }

    const reverseTransformStream = new Transform({
      transform: reverseTransform
    });

    process.stdin.pipe(reverseTransformStream).pipe(process.stdout);
    
};

await transform();