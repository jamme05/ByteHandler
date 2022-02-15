# ByteHandler
A simple bytehandler, hopefully helpfull for anyone working with bits and bytes. 
## Installing
---
```
$ npm install byte-handler
```
Currently just with npm, but might add more ways if people want.
## Examples
---
Converting a buffer into an array of Bytes
```JavaScript
const { Byte } = require('byte-handler');
// Now we create a buffer object.
var buf = Buffer.alloc(5,'a');

// Create an array for storing the bytes.
var bytes = [];

// Looping through all numbers in the buffer and converting them to bytes.
for(var num of buf){
    var byte = new Byte(num);
    bytes.push(byte);
}

// Write the bytes into the console.
console.log(bytes);
```